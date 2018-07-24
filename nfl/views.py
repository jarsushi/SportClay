from django.shortcuts import render, get_object_or_404
from django.utils import timezone
from django.shortcuts import redirect
from django.db import connection
from django.views.decorators.csrf import csrf_exempt


def contact(request):
	return render(request, 'nfl/contact.html', {})


def canvas(request):
	if request.method == 'GET':
		field =  request.GET.get('fieldnames')
		return render(request, 'nfl/canvas.html', {"field": field})
	else:
		return render(request, 'nfl/canvas.html', {})


def home(request):
	return render(request, 'nfl/home.html', {})


def examples(request):
	return render(request, 'nfl/examples.html', {})


def table(request):


	print('hi')

	cursor = connection.cursor()
	type = request.POST.get('type')
	name = request.POST.get('name')
	id = request.POST.get('id')
	parentIDs = request.POST.get('parents').split(',')
	print('before')
	# print(parents);
	print('after')
	# words = parents.split(',')
	# print(words)
	# print(words[0])
	# print(words[1])

	# count = int(request.POST.get('count'))
	# countMod = count % 2
	
	if request.method == 'POST':
		if type == 'process':
			if name == 'sort':
				order = request.POST.get('order')
				# print(countMod)
				# print(count)
				# print(order)
				if order:
					# print('in if')
					# print(order)
					cursor.execute("CREATE TABLE temp" + str(id) + " SELECT * FROM temp" + parentIDs[0] + " order by " + order)
				else:
					# print('in else')
					cursor.execute("CREATE TABLE temp" + str(id) + " SELECT * FROM temp" + parentIDs[0])
				cursor.execute("DROP TABLE temp" + parentIDs[0])
				print('sort finished')
				return render(request, 'nfl/table.html', {})

			if name == 'source':
				table = request.POST.get('table')
				fields = request.POST.get('fields')
				selectors = request.POST.get('selectors')
				include = request.POST.get('include')
				if include:
					cursor.execute("CREATE TABLE temp" + str(id) + " SELECT " + fields + " FROM " + table + " WHERE 1=1 " + selectors)
				else:
					cursor.execute("CREATE TABLE temp" + str(id) + " SELECT " + fields + " FROM " + table + " WHERE not( 0=1 " + selectors + ")")
				print('source finished')
				return render(request, 'nfl/table.html', {})

			if name == 'filter':
				fields = request.POST.get('fields')
				cursor.execute("CREATE TABLE temp" + str(id) + " SELECT " + fields + " FROM temp" + parentIDs[0])
				print('filter finished')
				cursor.execute("DROP TABLE temp" + parentIDs[0])
				return render(request, 'nfl/table.html', {})

			if name == 'merge':
				print('inside merge somehow')
				joinType = request.POST.get('joinType')
				joinVars = request.POST.get('joinVars').split(',')
				joinStatement = ''
				#for parents:
				#	for joinVars:
					#blah blah blah
				cursor.execute("CREATE TABLE temp" + str(id) + " SELECT " + fields + " FROM temp" + parentIDs[0])
				for parentID in parentIDs:
					cursor.execute("DROP TABLE temp" + parentID)
				return render(request, 'nfl/table.html', {})

		elif type == 'terminal':
			if name == 'table':
				cursor.execute("SELECT * FROM temp" + parentIDs[0])
				rows = cursor.fetchall()
				tableFields = [k[0] for k in cursor.description]
				cursor.execute("DROP TABLE temp" + parentIDs[0])
				print('table finished')
				return render(request, 'nfl/table.html', {"rows": rows, "finalFields": tableFields})

	return render(request, 'nfl/examples.html', {})



