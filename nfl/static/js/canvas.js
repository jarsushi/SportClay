var main =function(){

	//Here

	jQuery.ajaxSetup({async:false});

	//Add hide class back into sourceFormHTML!!


	/* 
	var sourceFormHTML = "<div class='newNodeForm sourceForm nodeForm' name='Source'><h5 class='nodeNameLabel'>Name:</h5><textarea class='nodeName'>Source</textarea><div class='dropdown'><h5 class='sourceFormDatabaseLabel'>Database:</h5><button class='btn btn-primary dropdown-toggle sourceFormDatabaseButton' type='button' data-toggle='dropdown'>Select one <span class='caret'></span></button><ul class='dropdown-menu scrollable-menu sourceFormDatabaseMenu'><li class='sourceFormActiveDatabaseItem' name='selectOne'><a href='#'>Select one</a></li><li name='NFL'><a href='#'>NFL</a></li></ul></div><div class='dropdown'><h5 class='sourceFormTableLabel'>Table:</h5><button class='btn btn-primary dropdown-toggle sourceFormTableButton' type='button' data-toggle='dropdown'>Select one <span class='caret'></span></button><ul class='dropdown-menu scrollable-menu sourceFormNFLTableMenu sourceFormTableMenu' role='menu' style='visibility: hidden'><li class='sourceFormActiveTableItem' name='selectOne'><a href='#'>Select one</a></li><li name='BLOCK'><a href='#'>BLOCK</a></li><li name='CHART'><a href='#'>CHART</a></li><li name='CONV'><a href='#'>CONV</a></li><li name='DEFENSE'><a href='#'>DEFENSE</a></li><li name='DRIVE'><a href='#'>DRIVE</a></li><li name='FGXP'><a href='#'>FGXP</a></li><li name='FUMBLE'><a href='#'>FUMBLE</a></li><li name='GAME'><a href='#'>GAME</a></li><li name='INTERCEPT'><a href='#'>INTERCEPT</a></li><li name='KICKER'><a href='#'>KICKER</a></li><li name='KOFF'><a href='#'>KOFF</a></li><li name='OFFENSE'><a href='#'>OFFENSE</a></li><li name='OLINE'><a href='#'>OLINE</a></li><li name='PASS'><a href='#'>PASS</a></li><li name='PBP'><a href='#'>PBP</a></li><li name='PENALTY'><a href='#'>PENALTY</a></li><li name='PLAY'><a href='#'>PLAY</a></li><li name='PLAYER'><a href='#'>PLAYER</a></li><li name='PUNT'><a href='#'>PUNT</a></li><li name='REDZONE'><a href='#'>REDZONE</a></li><li name='RUSH'><a href='#'>RUSH</a></li><li name='SACK'><a href='#'>SACK</a></li><li name='SAFTEY'><a href='#'>SAFTEY</a></li><li name='TACKLE'><a href='#'>TACKLE</a></li><li name='TD'><a href='#'>TD</a></li><li name='TEAM'><a href='#'>TEAM</a></li></ul></div><div class='dropdown'><h5 class='sourceFormFieldsLabel'>Fields:</h5><button class='btn btn-primary dropdown-toggle sourceFormFieldsButton' type='button' data-toggle='dropdown'>Fields <span class='caret'></span></button><table name='NFLSelectOne' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu activeFieldList'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLBLOCK' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLCHART' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLCONV' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLDEFENSE' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLDRIVE' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLFGXP' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLFUMBLE' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLGAME' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLINTERCPT' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLKICKER' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLKOFF' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLOFFENSE' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLOLINE' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLPASS' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLPBP' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLPENALTY' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLPLAY' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLPLAYER' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLPUNT' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLREDZONE' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLRUSH' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLSACK' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLSAFTEY' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLTACKLE' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLTD' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLTEAM' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'><tr name='includeAll'><td colspan='2'>INCLUDE ALL</td></tr><tr name='excludeAll'><td colspan='2'>EXCLUDE ALL</td></tr><tr name='space' colspan='2'></tr><tr name='tid' class='NFLFields'><td class='NFLColumn'>tid</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='gid' class='NFLFields'><td class='NFLColumn'>gid</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='tname' class='NFLFields'><td class='NFLColumn'>tname</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='pts' class='NFLFields'><td class='NFLColumn'>pts</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='q1p' class='NFLFields'><td class='NFLColumn'>q1p</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='q2p' class='NFLFields'><td class='NFLColumn'>q2p</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='q3p' class='NFLFields'><td class='NFLColumn'>q3p</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='q4p' class='NFLFields'><td class='NFLColumn'>q4p</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='rfd' class='NFLFields'><td class='NFLColumn'>rfd</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='pfd' class='NFLFields'><td class='NFLColumn'>pfd</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='ifd' class='NFLFields'><td class='NFLColumn'>ifd</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='ry' class='NFLFields'><td class='NFLColumn'>ry</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='ra' class='NFLFields'><td class='NFLColumn'>ra</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='py' class='NFLFields'><td class='NFLColumn'>py</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='pa' class='NFLFields'><td class='NFLColumn'>pa</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='pc' class='NFLFields'><td class='NFLColumn'>pc</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='sk' class='NFLFields'><td class='NFLColumn'>sk</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='ints' class='NFLFields'><td class='NFLColumn'>ints</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='fum' class='NFLFields'><td class='NFLColumn'>fum</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='pu' class='NFLFields'><td class='NFLColumn'>pu</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='gpy' class='NFLFields'><td class='NFLColumn'>gpy</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='pr' class='NFLFields'><td class='NFLColumn'>pr</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='pry' class='NFLFields'><td class='NFLColumn'>pry</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='kr' class='NFLFields'><td class='NFLColumn'>kr</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='kry' class='NFLFields'><td class='NFLColumn'>kry</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='ir' class='NFLFields'><td class='NFLColumn'>ir</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='iry' class='NFLFields'><td class='NFLColumn'>iry</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='pen' class='NFLFields'><td class='NFLColumn'>pen</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='top' class='NFLFields'><td class='NFLColumn'>top</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='td' class='NFLFields'><td class='NFLColumn'>td</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='tdr' class='NFLFields'><td class='NFLColumn'>tdr</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='tdp' class='NFLFields'><td class='NFLColumn'>tdp</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='tdt' class='NFLFields'><td class='NFLColumn'>tdt</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='fgm' class='NFLFields'><td class='NFLColumn'>fgm</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='fgat' class='NFLFields'><td class='NFLColumn'>fgat</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='fgy' class='NFLFields'><td class='NFLColumn'>fgy</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='rza' class='NFLFields'><td class='NFLColumn'>rza</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='rzc' class='NFLFields'><td class='NFLColumn'>rzc</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='bry' class='NFLFields'><td class='NFLColumn'>bry</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='bpy' class='NFLFields'><td class='NFLColumn'>bpy</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='srp' class='NFLFields'><td class='NFLColumn'>srp</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='s1rp' class='NFLFields'><td class='NFLColumn'>s1rp</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='s2rp' class='NFLFields'><td class='NFLColumn'>s2rp</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='s3rp' class='NFLFields'><td class='NFLColumn'>s3rp</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='spp' class='NFLFields'><td class='NFLColumn'>spp</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='s1pp' class='NFLFields'><td class='NFLColumn'>s1pp</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='s2pp' class='NFLFields'><td class='NFLColumn'>s2pp</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='s3pp' class='NFLFields'><td class='NFLColumn'>s3pp</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='lea' class='NFLFields'><td class='NFLColumn'>lea</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='ley' class='NFLFields'><td class='NFLColumn'>ley</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='lta' class='NFLFields'><td class='NFLColumn'>lta</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='lty' class='NFLFields'><td class='NFLColumn'>lty</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='lga' class='NFLFields'><td class='NFLColumn'>lga</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='lgy' class='NFLFields'><td class='NFLColumn'>lgy</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='mda' class='NFLFields'><td class='NFLColumn'>mda</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='mdy' class='NFLFields'><td class='NFLColumn'>mdy</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='rga' class='NFLFields'><td class='NFLColumn'>rga</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='rgy' class='NFLFields'><td class='NFLColumn'>rgy</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='rta' class='NFLFields'><td class='NFLColumn'>rta</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='rty' class='NFLFields'><td class='NFLColumn'>rty</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='rea' class='NFLFields'><td class='NFLColumn'>rea</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='rey' class='NFLFields'><td class='NFLColumn'>rey</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='r1a' class='NFLFields'><td class='NFLColumn'>r1a</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='r1y' class='NFLFields'><td class='NFLColumn'>r1y</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='r2a' class='NFLFields'><td class='NFLColumn'>r2a</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='r2y' class='NFLFields'><td class='NFLColumn'>r2y</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='r3a' class='NFLFields'><td class='NFLColumn'>r3a</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='r3y' class='NFLFields'><td class='NFLColumn'>r3y</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='qba' class='NFLFields'><td class='NFLColumn'>qba</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='qby' class='NFLFields'><td class='NFLColumn'>qby</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='sla' class='NFLFields'><td class='NFLColumn'>sla</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='sly' class='NFLFields'><td class='NFLColumn'>sly</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='sma' class='NFLFields'><td class='NFLColumn'>sma</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='smy' class='NFLFields'><td class='NFLColumn'>smy</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='sra' class='NFLFields'><td class='NFLColumn'>sra</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='sry' class='NFLFields'><td class='NFLColumn'>sry</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='dla' class='NFLFields'><td class='NFLColumn'>dla</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='dly' class='NFLFields'><td class='NFLColumn'>dly</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='dma' class='NFLFields'><td class='NFLColumn'>dma</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='dmy' class='NFLFields'><td class='NFLColumn'>dmy</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='dra' class='NFLFields'><td class='NFLColumn'>dra</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='dry' class='NFLFields'><td class='NFLColumn'>dry</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='wr1a' class='NFLFields'><td class='NFLColumn'>wr1a</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='wr1y' class='NFLFields'><td class='NFLColumn'>wr1y</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='wr3a' class='NFLFields'><td class='NFLColumn'>wr3a</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='wr3y' class='NFLFields'><td class='NFLColumn'>wr3y</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='tea' class='NFLFields'><td class='NFLColumn'>tea</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='tey' class='NFLFields'><td class='NFLColumn'>tey</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='rba' class='NFLFields'><td class='NFLColumn'>rba</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='rby' class='NFLFields'><td class='NFLColumn'>rby</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='sga' class='NFLFields'><td class='NFLColumn'>sga</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='sgy' class='NFLFields'><td class='NFLColumn'>sgy</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='p1a' class='NFLFields'><td class='NFLColumn'>p1a</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='p1y' class='NFLFields'><td class='NFLColumn'>p1y</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='p2a' class='NFLFields'><td class='NFLColumn'>p2a</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='p2y' class='NFLFields'><td class='NFLColumn'>p2y</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='p3a' class='NFLFields'><td class='NFLColumn'>p3a</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='p3y' class='NFLFields'><td class='NFLColumn'>p3y</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='spc' class='NFLFields'><td class='NFLColumn'>spc</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='mpc' class='NFLFields'><td class='NFLColumn'>mpc</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='lpc' class='NFLFields'><td class='NFLColumn'>lpc</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='q1ra' class='NFLFields'><td class='NFLColumn'>q1ra</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='q1ry' class='NFLFields'><td class='NFLColumn'>q1ry</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='q1pa' class='NFLFields'><td class='NFLColumn'>q1pa</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='q1py' class='NFLFields'><td class='NFLColumn'>q1py</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='lcra' class='NFLFields'><td class='NFLColumn'>lcra</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='lcry' class='NFLFields'><td class='NFLColumn'>lcry</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='lcpa' class='NFLFields'><td class='NFLColumn'>lcpa</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='lcpy' class='NFLFields'><td class='NFLColumn'>lcpy</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='rzra' class='NFLFields'><td class='NFLColumn'>rzra</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='rzry' class='NFLFields'><td class='NFLColumn'>rzry</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='rzpa' class='NFLFields'><td class='NFLColumn'>rzpa</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='rzpy' class='NFLFields'><td class='NFLColumn'>rzpy</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='sky' class='NFLFields'><td class='NFLColumn'>sky</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='lbs' class='NFLFields'><td class='NFLColumn'>lbs</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='dbs' class='NFLFields'><td class='NFLColumn'>dbs</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='sfpy' class='NFLFields'><td class='NFLColumn'>sfpy</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='drv' class='NFLFields'><td class='NFLColumn'>drv</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='npy' class='NFLFields'><td class='NFLColumn'>npy</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='tb' class='NFLFields'><td class='NFLColumn'>tb</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='i20' class='NFLFields'><td class='NFLColumn'>i20</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='rtd' class='NFLFields'><td class='NFLColumn'>rtd</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='lnr' class='NFLFields'><td class='NFLColumn'>lnr</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='lnp' class='NFLFields'><td class='NFLColumn'>lnp</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='lbr' class='NFLFields'><td class='NFLColumn'>lbr</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='lbp' class='NFLFields'><td class='NFLColumn'>lbp</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='dbr' class='NFLFields'><td class='NFLColumn'>dbr</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='dbp' class='NFLFields'><td class='NFLColumn'>dbp</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='nha' class='NFLFields'><td class='NFLColumn'>nha</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='s3a' class='NFLFields'><td class='NFLColumn'>s3a</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='s3c' class='NFLFields'><td class='NFLColumn'>s3c</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='l3a' class='NFLFields'><td class='NFLColumn'>l3a</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='l3c' class='NFLFields'><td class='NFLColumn'>l3c</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='stf' class='NFLFields'><td class='NFLColumn'>stf</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='dp' class='NFLFields'><td class='NFLColumn'>dp</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='fsp' class='NFLFields'><td class='NFLColumn'>fsp</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='ohp' class='NFLFields'><td class='NFLColumn'>ohp</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='pbep' class='NFLFields'><td class='NFLColumn'>pbep</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='dlp' class='NFLFields'><td class='NFLColumn'>dlp</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='dsp' class='NFLFields'><td class='NFLColumn'>dsp</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='dum' class='NFLFields'><td class='NFLColumn'>dum</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='pfn' class='NFLFields'><td class='NFLColumn'>pfn</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='snpo' class='NFLFields'><td class='NFLColumn'>snpo</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='snpd' class='NFLFields'><td class='NFLColumn'>snpd</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr></table></ul></div><div class='sourceFormSelectionArea'><img class='grayinclude noshow' src='/static/jpg/grayselect.jpg' style='margin-left:10px;width:15px;height:15px'></img><img class='blackinclude' src='/static/jpg/blackselect.jpg' style='margin-left:10px;width:15px;height:15px'> Include</img><img class='grayexclude' src='/static/jpg/grayselect.jpg' style='margin-left:20px;width:15px;height:15px'></img><img class='blackexclude noshow' src='/static/jpg/blackselect.jpg' style='margin-left:20px;width:15px;height:15px'> Exclude</img><form class='filterform' id='filterform' method='GET'><br><p class='selectionHeader'>Selection criteria:</p><br><textarea type='text' class='fieldnames' name='fieldnames' id='fieldnames'></textarea><br><textarea class='options' name='options' style='display: none'>database,table,columns,selectors,include</textarea></form></div><button class='ok sourceOK' type='button'>OK</button></div>";
	*/
	// var sortFormHTML = "<div class='newNodeForm node nodeForm sortForm hide' name='Sort'><h5 class='nodeNameLabel'>Name:</h5><textarea class='nodeName'>Sort</textarea><div class='sortTableBorder'></div><table class='sortTable'><thead><tr class='sortFormLabels'><th class='fieldName noSelect'>Column Name</th><th class='orderBy noSelect'>Order By</th><th class='position noSelect'>Position</th></tr><tbody></tbody></table><button class = 'sortTopArrow'><img height='40px' width='25px' src='/static/gif/topArrow.gif'></img></button><button class = 'sortUpArrow'><img height='40px' width='25px' src='/static/gif/upArrow.gif'></img></button><button class = 'sortDownArrow'><img height='40px' width='25px' src='/static/gif/downArrow.gif'}'></img></button><button class = 'sortBottomArrow'><img height='40px' width='25px' src='/static/gif/bottomArrow.gif'}'></img></button><button class='ok sortOK' type='button'>OK</button></div>";
	var tableFields = {NFLTEAM: ["tid","gid","tname","pts","q1p","q2p","q3p","q4p","rfd","pfd","ifd","ry","ra","py","pa","pc","sk","ints","fum","pu","gpy","pr","pry","kr","kry","ir","iry","pen","top","td","tdr","tdp","tdt","fgm","fgat","fgy","rza","rzc","bry","bpy","srp","s1rp","s2rp","s3rp","spp","s1pp","s2pp","s3pp","lea","ley","lta","lty","lga","lgy","mda","mdy","rga","rgy","rta","rty","rea","rey","r1a","r1y","r2a","r2y","r3a","r3y","qba","qby","sla","sly","sma","smy","sra","sry","dla","dly","dma","dmy","dra","dry","wr1a","wr1y","wr3a","wr3y","tea","tey","rba","rby","sga","sgy","p1a","p1y","p2a","p2y","p3a","p3y","spc","mpc","lpc","q1ra","q1ry","q1pa","q1py","lcra","lcry","lcpa","lcpy","rzra","rzry","rzpa","rzpy","sky","lbs","dbs","sfpy","drv","npy","tb","i20","rtd","lnr","lnp","lbr","lbp","dbr","dbp","nha","s3a","s3c","l3a","l3c","stf","dp","fsp","ohp","pbep","dlp","dsp","dum","pfn","snpo","snpd"]};
	var nodeImgHTML = {sourceNode: "<div class='imgCanvasNodeContainer sourceNode' id='-2'><img src='/static/gif/sourceNode.gif' class='canvasNode sourceNode'/><p>Source</p></div>"
						, sortNode: "<div class='imgCanvasNodeContainer sortNode' id='-2'><img src='/static/gif/sortNode.gif' class='canvasNode sortNode'/><p>Sort</p></div>"
					    , tableNode: "<div class='imgCanvasNodeContainer tableNode' id='-2'><img src='/static/gif/tableNode.gif' class='canvasNode tableNode'/><p>Table</p></div>"};
	var nodeFormHTML = {sourceNode: "<div class='newNodeForm sourceForm nodeForm hide' id='-2' name='Source'><h5 class='nodeNameLabel'>Name:</h5><textarea class='nodeName'>Source</textarea><div class='dropdown'><h5 class='sourceFormDatabaseLabel'>Database:</h5><button class='btn btn-primary dropdown-toggle sourceFormDatabaseButton' type='button' data-toggle='dropdown'>Select one <span class='caret'></span></button><ul class='dropdown-menu scrollable-menu sourceFormDatabaseMenu'><li class='sourceFormActiveDatabaseItem' name='selectOne'><a href='#'>Select one</a></li><li name='NFL'><a href='#'>NFL</a></li></ul></div><div class='dropdown'><h5 class='sourceFormTableLabel'>Table:</h5><button class='btn btn-primary dropdown-toggle sourceFormTableButton' type='button' data-toggle='dropdown'>Select one <span class='caret'></span></button><ul class='dropdown-menu scrollable-menu sourceFormNFLTableMenu sourceFormTableMenu' role='menu' style='visibility: hidden'><li class='sourceFormActiveTableItem' name='selectOne'><a href='#'>Select one</a></li><li name='BLOCK'><a href='#'>BLOCK</a></li><li name='CHART'><a href='#'>CHART</a></li><li name='CONV'><a href='#'>CONV</a></li><li name='DEFENSE'><a href='#'>DEFENSE</a></li><li name='DRIVE'><a href='#'>DRIVE</a></li><li name='FGXP'><a href='#'>FGXP</a></li><li name='FUMBLE'><a href='#'>FUMBLE</a></li><li name='GAME'><a href='#'>GAME</a></li><li name='INTERCEPT'><a href='#'>INTERCEPT</a></li><li name='KICKER'><a href='#'>KICKER</a></li><li name='KOFF'><a href='#'>KOFF</a></li><li name='OFFENSE'><a href='#'>OFFENSE</a></li><li name='OLINE'><a href='#'>OLINE</a></li><li name='PASS'><a href='#'>PASS</a></li><li name='PBP'><a href='#'>PBP</a></li><li name='PENALTY'><a href='#'>PENALTY</a></li><li name='PLAY'><a href='#'>PLAY</a></li><li name='PLAYER'><a href='#'>PLAYER</a></li><li name='PUNT'><a href='#'>PUNT</a></li><li name='REDZONE'><a href='#'>REDZONE</a></li><li name='RUSH'><a href='#'>RUSH</a></li><li name='SACK'><a href='#'>SACK</a></li><li name='SAFTEY'><a href='#'>SAFTEY</a></li><li name='TACKLE'><a href='#'>TACKLE</a></li><li name='TD'><a href='#'>TD</a></li><li name='TEAM'><a href='#'>TEAM</a></li></ul></div><div class='dropdown'><h5 class='sourceFormFieldsLabel'>Fields:</h5><button class='btn btn-primary dropdown-toggle sourceFormFieldsButton' type='button' data-toggle='dropdown'>Fields <span class='caret'></span></button><table name='NFLSelectOne' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu activeFieldList'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLBLOCK' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLCHART' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLCONV' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLDEFENSE' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLDRIVE' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLFGXP' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLFUMBLE' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLGAME' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLINTERCPT' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLKICKER' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLKOFF' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLOFFENSE' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLOLINE' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLPASS' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLPBP' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLPENALTY' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLPLAY' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLPLAYER' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLPUNT' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLREDZONE' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLRUSH' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLSACK' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLSAFTEY' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLTACKLE' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLTD' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'></table><table name='NFLTEAM' class='dropdown-menu scrollable-menu sourceFormNFLFieldsMenu'  role='menu' data-toggle='dropdown' style='visibility:hidden'><tr name='includeAll'><td colspan='2'>INCLUDE ALL</td></tr><tr name='excludeAll'><td colspan='2'>EXCLUDE ALL</td></tr><tr name='space' colspan='2'></tr><tr name='tid' class='NFLFields'><td class='NFLColumn'>tid</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='gid' class='NFLFields'><td class='NFLColumn'>gid</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='tname' class='NFLFields'><td class='NFLColumn'>tname</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='pts' class='NFLFields'><td class='NFLColumn'>pts</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='q1p' class='NFLFields'><td class='NFLColumn'>q1p</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='q2p' class='NFLFields'><td class='NFLColumn'>q2p</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='q3p' class='NFLFields'><td class='NFLColumn'>q3p</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='q4p' class='NFLFields'><td class='NFLColumn'>q4p</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='rfd' class='NFLFields'><td class='NFLColumn'>rfd</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='pfd' class='NFLFields'><td class='NFLColumn'>pfd</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='ifd' class='NFLFields'><td class='NFLColumn'>ifd</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='ry' class='NFLFields'><td class='NFLColumn'>ry</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='ra' class='NFLFields'><td class='NFLColumn'>ra</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='py' class='NFLFields'><td class='NFLColumn'>py</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='pa' class='NFLFields'><td class='NFLColumn'>pa</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='pc' class='NFLFields'><td class='NFLColumn'>pc</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='sk' class='NFLFields'><td class='NFLColumn'>sk</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='ints' class='NFLFields'><td class='NFLColumn'>ints</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='fum' class='NFLFields'><td class='NFLColumn'>fum</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='pu' class='NFLFields'><td class='NFLColumn'>pu</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='gpy' class='NFLFields'><td class='NFLColumn'>gpy</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='pr' class='NFLFields'><td class='NFLColumn'>pr</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='pry' class='NFLFields'><td class='NFLColumn'>pry</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='kr' class='NFLFields'><td class='NFLColumn'>kr</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='kry' class='NFLFields'><td class='NFLColumn'>kry</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='ir' class='NFLFields'><td class='NFLColumn'>ir</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='iry' class='NFLFields'><td class='NFLColumn'>iry</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='pen' class='NFLFields'><td class='NFLColumn'>pen</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='top' class='NFLFields'><td class='NFLColumn'>top</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='td' class='NFLFields'><td class='NFLColumn'>td</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='tdr' class='NFLFields'><td class='NFLColumn'>tdr</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='tdp' class='NFLFields'><td class='NFLColumn'>tdp</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='tdt' class='NFLFields'><td class='NFLColumn'>tdt</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='fgm' class='NFLFields'><td class='NFLColumn'>fgm</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='fgat' class='NFLFields'><td class='NFLColumn'>fgat</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='fgy' class='NFLFields'><td class='NFLColumn'>fgy</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='rza' class='NFLFields'><td class='NFLColumn'>rza</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='rzc' class='NFLFields'><td class='NFLColumn'>rzc</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='bry' class='NFLFields'><td class='NFLColumn'>bry</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='bpy' class='NFLFields'><td class='NFLColumn'>bpy</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='srp' class='NFLFields'><td class='NFLColumn'>srp</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='s1rp' class='NFLFields'><td class='NFLColumn'>s1rp</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='s2rp' class='NFLFields'><td class='NFLColumn'>s2rp</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='s3rp' class='NFLFields'><td class='NFLColumn'>s3rp</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='spp' class='NFLFields'><td class='NFLColumn'>spp</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='s1pp' class='NFLFields'><td class='NFLColumn'>s1pp</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='s2pp' class='NFLFields'><td class='NFLColumn'>s2pp</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='s3pp' class='NFLFields'><td class='NFLColumn'>s3pp</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='lea' class='NFLFields'><td class='NFLColumn'>lea</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='ley' class='NFLFields'><td class='NFLColumn'>ley</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='lta' class='NFLFields'><td class='NFLColumn'>lta</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='lty' class='NFLFields'><td class='NFLColumn'>lty</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='lga' class='NFLFields'><td class='NFLColumn'>lga</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='lgy' class='NFLFields'><td class='NFLColumn'>lgy</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='mda' class='NFLFields'><td class='NFLColumn'>mda</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='mdy' class='NFLFields'><td class='NFLColumn'>mdy</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='rga' class='NFLFields'><td class='NFLColumn'>rga</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='rgy' class='NFLFields'><td class='NFLColumn'>rgy</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='rta' class='NFLFields'><td class='NFLColumn'>rta</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='rty' class='NFLFields'><td class='NFLColumn'>rty</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='rea' class='NFLFields'><td class='NFLColumn'>rea</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='rey' class='NFLFields'><td class='NFLColumn'>rey</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='r1a' class='NFLFields'><td class='NFLColumn'>r1a</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='r1y' class='NFLFields'><td class='NFLColumn'>r1y</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='r2a' class='NFLFields'><td class='NFLColumn'>r2a</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='r2y' class='NFLFields'><td class='NFLColumn'>r2y</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='r3a' class='NFLFields'><td class='NFLColumn'>r3a</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='r3y' class='NFLFields'><td class='NFLColumn'>r3y</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='qba' class='NFLFields'><td class='NFLColumn'>qba</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='qby' class='NFLFields'><td class='NFLColumn'>qby</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='sla' class='NFLFields'><td class='NFLColumn'>sla</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='sly' class='NFLFields'><td class='NFLColumn'>sly</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='sma' class='NFLFields'><td class='NFLColumn'>sma</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='smy' class='NFLFields'><td class='NFLColumn'>smy</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='sra' class='NFLFields'><td class='NFLColumn'>sra</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='sry' class='NFLFields'><td class='NFLColumn'>sry</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='dla' class='NFLFields'><td class='NFLColumn'>dla</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='dly' class='NFLFields'><td class='NFLColumn'>dly</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='dma' class='NFLFields'><td class='NFLColumn'>dma</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='dmy' class='NFLFields'><td class='NFLColumn'>dmy</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='dra' class='NFLFields'><td class='NFLColumn'>dra</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='dry' class='NFLFields'><td class='NFLColumn'>dry</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='wr1a' class='NFLFields'><td class='NFLColumn'>wr1a</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='wr1y' class='NFLFields'><td class='NFLColumn'>wr1y</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='wr3a' class='NFLFields'><td class='NFLColumn'>wr3a</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='wr3y' class='NFLFields'><td class='NFLColumn'>wr3y</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='tea' class='NFLFields'><td class='NFLColumn'>tea</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='tey' class='NFLFields'><td class='NFLColumn'>tey</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='rba' class='NFLFields'><td class='NFLColumn'>rba</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='rby' class='NFLFields'><td class='NFLColumn'>rby</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='sga' class='NFLFields'><td class='NFLColumn'>sga</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='sgy' class='NFLFields'><td class='NFLColumn'>sgy</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='p1a' class='NFLFields'><td class='NFLColumn'>p1a</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='p1y' class='NFLFields'><td class='NFLColumn'>p1y</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='p2a' class='NFLFields'><td class='NFLColumn'>p2a</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='p2y' class='NFLFields'><td class='NFLColumn'>p2y</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='p3a' class='NFLFields'><td class='NFLColumn'>p3a</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='p3y' class='NFLFields'><td class='NFLColumn'>p3y</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='spc' class='NFLFields'><td class='NFLColumn'>spc</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='mpc' class='NFLFields'><td class='NFLColumn'>mpc</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='lpc' class='NFLFields'><td class='NFLColumn'>lpc</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='q1ra' class='NFLFields'><td class='NFLColumn'>q1ra</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='q1ry' class='NFLFields'><td class='NFLColumn'>q1ry</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='q1pa' class='NFLFields'><td class='NFLColumn'>q1pa</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='q1py' class='NFLFields'><td class='NFLColumn'>q1py</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='lcra' class='NFLFields'><td class='NFLColumn'>lcra</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='lcry' class='NFLFields'><td class='NFLColumn'>lcry</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='lcpa' class='NFLFields'><td class='NFLColumn'>lcpa</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='lcpy' class='NFLFields'><td class='NFLColumn'>lcpy</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='rzra' class='NFLFields'><td class='NFLColumn'>rzra</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='rzry' class='NFLFields'><td class='NFLColumn'>rzry</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='rzpa' class='NFLFields'><td class='NFLColumn'>rzpa</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='rzpy' class='NFLFields'><td class='NFLColumn'>rzpy</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='sky' class='NFLFields'><td class='NFLColumn'>sky</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='lbs' class='NFLFields'><td class='NFLColumn'>lbs</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='dbs' class='NFLFields'><td class='NFLColumn'>dbs</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='sfpy' class='NFLFields'><td class='NFLColumn'>sfpy</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='drv' class='NFLFields'><td class='NFLColumn'>drv</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='npy' class='NFLFields'><td class='NFLColumn'>npy</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='tb' class='NFLFields'><td class='NFLColumn'>tb</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='i20' class='NFLFields'><td class='NFLColumn'>i20</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='rtd' class='NFLFields'><td class='NFLColumn'>rtd</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='lnr' class='NFLFields'><td class='NFLColumn'>lnr</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='lnp' class='NFLFields'><td class='NFLColumn'>lnp</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='lbr' class='NFLFields'><td class='NFLColumn'>lbr</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='lbp' class='NFLFields'><td class='NFLColumn'>lbp</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='dbr' class='NFLFields'><td class='NFLColumn'>dbr</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='dbp' class='NFLFields'><td class='NFLColumn'>dbp</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='nha' class='NFLFields'><td class='NFLColumn'>nha</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='s3a' class='NFLFields'><td class='NFLColumn'>s3a</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='s3c' class='NFLFields'><td class='NFLColumn'>s3c</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='l3a' class='NFLFields'><td class='NFLColumn'>l3a</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='l3c' class='NFLFields'><td class='NFLColumn'>l3c</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='stf' class='NFLFields'><td class='NFLColumn'>stf</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='dp' class='NFLFields'><td class='NFLColumn'>dp</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='fsp' class='NFLFields'><td class='NFLColumn'>fsp</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='ohp' class='NFLFields'><td class='NFLColumn'>ohp</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='pbep' class='NFLFields'><td class='NFLColumn'>pbep</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='dlp' class='NFLFields'><td class='NFLColumn'>dlp</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='dsp' class='NFLFields'><td class='NFLColumn'>dsp</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='dum' class='NFLFields'><td class='NFLColumn'>dum</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='pfn' class='NFLFields'><td class='NFLColumn'>pfn</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='snpo' class='NFLFields'><td class='NFLColumn'>snpo</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr><tr name='snpd' class='NFLFields'><td class='NFLColumn'>snpd</td><td class='included'>INCLUDED</td><td class='excluded noshow'>EXCLUDED</td></tr></table></ul></div><div class='sourceFormSelectionArea'><img class='grayinclude noshow' src='/static/jpg/grayselect.jpg' style='margin-left:10px;width:15px;height:15px'></img><img class='blackinclude' src='/static/jpg/blackselect.jpg' style='margin-left:10px;width:15px;height:15px'> Include</img><img class='grayexclude' src='/static/jpg/grayselect.jpg' style='margin-left:20px;width:15px;height:15px'></img><img class='blackexclude noshow' src='/static/jpg/blackselect.jpg' style='margin-left:20px;width:15px;height:15px'> Exclude</img><form class='filterform' id='filterform' method='GET'><br><p class='selectionHeader'>Selection criteria:</p><br><textarea type='text' class='fieldnames' name='fieldnames' id='fieldnames'></textarea><br><textarea class='options' name='options' style='display: none'>database,table,columns,selectors,include</textarea></form></div><button class='btn btn-primary ok sourceOK' type='button'>Ok</button></div>"
						,sortNode: "<div class='newNodeForm node nodeForm sortForm hide' id='-2' name='Sort'><h5 class='nodeNameLabel'>Name:</h5><textarea class='nodeName'>Sort</textarea><div class='sortTableBorder'></div><table class='sortTable'><thead><tr class='sortFormLabels'><th class='fieldName noSelect'>Column Name</th><th class='orderBy noSelect'>Order By</th><th class='position noSelect'>Position</th></tr><tbody></tbody></table><button class = 'sortTopArrow'><img height='40px' width='25px' src='/static/gif/topArrow.gif'></img></button><button class = 'sortUpArrow'><img height='40px' width='25px' src='/static/gif/upArrow.gif'></img></button><button class = 'sortDownArrow'><img height='40px' width='25px' src='/static/gif/downArrow.gif'}'></img></button><button class = 'sortBottomArrow'><img height='40px' width='25px' src='/static/gif/bottomArrow.gif'}'></img></button><button class='ok sortOK' type='button'>OK</button></div>"
						,tableNode: "<div class='newNodeForm node nodeForm tableForm hide' id='-2' name='Table'><h5 class='nodeNameLabel'>Name:</h5><textarea class='nodeName'>Table</textarea><button class='run'>Run</button></div>"};
	var nodeFormAttributes = {sourceNode: ['name', 'type', 'table', 'fields', 'selectors', 'include']
								, sortNode: ['name', 'type', 'order']
								, tableNode: ['name', 'type']}
	// var sourceNode = "<img src='/static/gif/sourceNode.gif' class='nodeMenuSourceNode nodeMenuSourceNodeDroppable'/>"
	

	nodeIDNumbers=[];
	treeTop = new Node(null, 'top', null, null);
	// allNodeObjects = [];
	allNodeForms = [];
	var idToNodeObjectMap = new Object();
	var connectedID = [];
	var downID = '';
	var upID = '';



	$('div.imgMenuNodeContainer').draggable({
		helper: 'clone',
		opacity: 0.5
	});


	$('.test').click(function(){
		console.log(idToNodeObjectMap["o"+nodeIDNumbers[1]].fields);
	});

	// When a nodeMenu node is dropped on the canvas, create the object, form, and image and place it in the correct location
	$('div.canvas').droppable({
    	tolerance: "fit",
    	accept: 'div.imgMenuNodeContainer',
    	drop: function(event, ui) {
    		do{
				var tempID = String(Math.floor((Math.random()*100000) +1));
				} while ($.inArray(tempID, nodeIDNumbers)>=0)

			//o = object; n = node (img); f = form
			var otempID = "o" + tempID;
			var ntempID = "n" + tempID;
			var ftempID = "f" + tempID;
			nodeIDNumbers.push(tempID);

			var nameNode = $(ui.draggable).attr('class').split(' ')[1];
			var name = nameNode.substring(0, nameNode.length-4);

			var tempNodeObject = createNode(otempID, name);
			// var tempNodeObject = new Node('top', otempID, null, type);
			idToNodeObjectMap[otempID] = tempNodeObject;
			treeTop.addChild(tempNodeObject);
			//ReplaceallNodeObjects with the idToNodeObjectMap!!
			// allNodeObjects.push(tempNodeObject);

			$('div.formOutline').append(nodeFormHTML[nameNode]);
			$('div#-2').attr('id', ftempID);

			//HERE!

			$('div.canvas').append(nodeImgHTML[nameNode]);	
			$('div.imgCanvasNodeContainer#-2').attr('id', ntempID);

			var newPosX = ui.offset.left - $(this).offset().left+129;
        	var newPosY = ui.offset.top - $(this).offset().top;

        	tempString = 'div#' + ntempID;
        	$(tempString).css('position','absolute');
      		$(tempString).css('left',newPosX);
      		$(tempString).css('top',newPosY);


			// nodeAttributes.substring(0, nodeAttributes.length-1)
			//Fix this connectedID thing once .run click functin is taken care of
			//connectedID is the type of node
			connectedID.push(name);
      		// connectedID.push($(ui.draggable).attr('class').split(' ')[1].substring(0, $(ui.draggable).attr('class').split(' ')[1].length-4));

      		$('div.imgCanvasNodeContainer').draggable({
			});

		}
	});


	//If a node upstream has available fields changed, change the available fields to the connected nodes downstream.
	var changeFormFieldsDownstream = function(node){
		if(node.firstChild){
			changeFormFieldsDownstream(node.firstChild);
		}

		if(node.nextSibling){
			changeFormFieldsDownstream(node.nextSibling);
		}

		// console.log(node.name)
		// console.log(node.fields)

		if(node.name=='sort' && node.fields){
			console.log(1)

			$('div#f' + node.id.substring(1,node.id.length) + ' table.sortTable tbody tr').remove('.sortFormField');

			for (i=1; i<=node.fields.length; i++){
				$('div#f' + node.id.substring(1,node.id.length) + ' table.sortTable').append("<tr class='sortFormField'><td class='noSelect fieldName'>" + String(node.fields[i-1]) + "</td><td class='orderBy noOrder noSelect'></td><td class='noSelect position'>-</td></tr>");
			}
		}
		return;
	}



	//When closing a div form, make sure the node label on the canvas matches the node name.
	var closeDivForm = function(id){

		var tempText = $('div#' + id).children('textarea.nodeName').val();

		if(tempText.trim()==''){
			$('img#n' + id.substring(1, id.length)).siblings('p').html($('div#' + id).attr('name'));
			$('div#' + id).children('textarea.nodeName').val($('div#' + id).attr('name'));
		} else {
			$('div#n' + id.substring(1, id.length) + ' img').siblings('p').html(tempText);
		}
		
		$('div#' + id).toggleClass('hide');
	}



	// Create the Node object and its function.
	function Node(parentNode, nodeID, fields, type){
		this.id =  nodeID;
		this.fields = fields;
	    this.parent = parentNode;
	    this.type = type;
	    this.firstChild = null;
	    this.lastChild = null;
	    this.previousSibling = null;
	    this.nextSibling = null;
	    this.addChild = function(child){
	    	child.parent = this;
	    	child.previousSibling = this.lastChild;
	    	if (this.lastChild != null){
	        	this.lastChild.nextSibling = child;
	    	}	
	    	this.lastChild = child;
	    	if (this.firstChild == null){
	    		this.firstChild = child;
	    	}
	    }
	    this.removeChild = function(child){
	    	if(child.previousSibling){
	    		child.previousSibling.nextSibling = child.nextSibling;
	    	}

	    	if(child.nextSibling){
	    		child.nextSibling.previousSibling = child.previousSibling;
	    	}

	    	if(this.firstChild.id == child.id){
	    		this.firstChild = child.nextSibling;
	    	}

	    	if(this.lastChild.id == child.id){
	    		this.lastChild = child.previousSibling;
	    	}
	    }
	}


	function terminalNode(nodeID, name){
		this.id =  nodeID;
		// this.fields = [];
	    this.parent = 'top';
    	this.name = name;
    	this.type = 'terminal'
    	this.previousSibling = null;
    	this.nextSibling = null;
	}

	function processNode(nodeID, name){
		this.id =  nodeID;
		this.fields = [];
		this.parent = 'top';
		this.attributes = {name: 'source'}
		this.name = name;
		this.type = 'process'
    	this.firstChild = null;
    	this.lastChild = null;
    	this.previousSibling = null;
    	this.nextSibling = null;
    	this.addChild = function(child){
    		child.parent = this;
    		child.previousSibling = this.lastChild;
    		if (this.lastChild != null){
	        	this.lastChild.nextSibling = child;
    		}	
    		this.lastChild = child;
    		if (this.firstChild == null){
    			this.firstChild = child;
    		}
    	}
    	this.removeChild = function(child){
    		if(child.previousSibling){
    			child.previousSibling.nextSibling = child.nextSibling;
    		}

    		if(child.nextSibling){
    			child.nextSibling.previousSibling = child.previousSibling;
    		}

    		if(this.firstChild.id == child.id){
    			this.firstChild = child.nextSibling;
    		}

    		if(this.lastChild.id == child.id){
    			this.lastChild = child.previousSibling;
    		}
    	}
	}



//Source Node could pass selection critera. And Sort node could pass a order by object {field1: asc}, {field2: desc}.
	var nodeFuncs = {table:
		function(nodeID){
			function tableNode() {}
			tableNode.prototype = Object.create(new terminalNode(nodeID, 'table'));
			return new tableNode(nodeID, 'table');
		}
		, source:
		function(nodeID){
			function sourceNode() {}
			sourceNode.prototype = Object.create(new processNode(nodeID, 'source'));
			sourceNode.prototype.table = '';
			sourceNode.prototype.selectors = '';
			sourceNode.prototype.include = 1;

			return new sourceNode(nodeID, 'source');
		}
		, sort:
		function(nodeID){
			function sortNode() {}
			sortNode.prototype = Object.create(new processNode(nodeID, 'sort'));
			sortNode.prototype.order = '';

			return new sortNode(nodeID, 'sort')
		}
	}

	function createNode(nodeID, name){
		return nodeFuncs[name](nodeID);
	}

	// var mysourceNode = createNode('abc123', 'source')


	// console.log(mysourceNode.id)

















	//Animation to open the text edit menu.
	$.fn.slideFadeToggle = function(easing, callback) {
  		return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
	};



	//Create a function to add text in the text edit menu and keep focus on the textarea.
	var insertIntoText = function(value){
		var area = $('textarea.selectFormInsideMenu');
		var curPos = area.prop('selectionEnd');
		var text = area.val();
		area.val(text.substring(0, curPos) + value + text.substring(curPos)).focus().prop({'selectionStart': curPos+value.length, 'selectionEnd': curPos+value.length});
	}



	//Sort the position of the rows in the field menu
	var sortPosition = function(id){

		var topRow = $('div#' + id + ' table tbody tr:first');

		for (var i=1; i<=topRow.siblings('.sortFormField').length+1; i++){
			var row = $('div#' + id + ' table tbody tr:nth-child(' + String(i+1) + ')');

			if (!row.children('td.orderBy').hasClass('noOrder')){
				var tempPosition = 1;
			
				for (var j=1; j < i; j++){
					if (!$('div#' + id + ' table tbody tr:nth-child(' + String(j+1) + ')').children('td.orderBy').hasClass('noOrder')) {
						tempPosition = tempPosition + 1;
					}
				}

				row.children('td.position').html(String(tempPosition));
			}
		}
	}



	//If double-clicking on a node on the canvas, close the visible form and toggle the if the form is visible.
	$('body').on('dblclick', 'div.imgCanvasNodeContainer', function(){

		var tempID = $(this).attr('id');
		var element = $('div.nodeForm:not(.hide)');

		// console.log('1');

		if (element.attr('id') != undefined){
			closeDivForm(element.attr('id'))
		}

		$('div#f' + tempID.substring(1, tempID.length)).toggleClass('hide');
	});



	//Toggle the selected class.
	$('body').on('click', 'div.nodeForm table tbody tr td.fieldName', function(){
		$(this).toggleClass('selected');
	});


	
	//Move the position of the selected row to the top of the rows menu. 
	$('body').on('click', 'div.nodeForm button.sortTopArrow', function(){

		var tempID = $(this).parents('div.sortForm').attr('id');

		for(var i=1; i<= $('div#' + String(tempID) + ' table tbody tr').siblings('.sortFormField').length; i++){

			var row = $('div#' + String(tempID) + ' table tbody tr:nth-child(' + String(i+1) + ')');

			if (row.children('.fieldName').hasClass('selected')){
				while(row.prev().hasClass('sortFormField') && !row.prev().children('td.fieldName').hasClass('selected')){
					row.insertBefore(row.prev('.sortFormField'));
				}
			} 
		}

		sortPosition(tempID);
	});



	//Move the position of the selected row up one row in the rows menu.
	$('body').on('click', 'div.nodeForm button.sortUpArrow', function(){

		var tempID = $(this).parents('div.sortForm').attr('id');

		for(var i=1; i<= $('div#' + String(tempID) + ' table tbody tr').siblings('.sortFormField').length; i++){

			var row = $('div#' + String(tempID) + ' table tbody tr:nth-child(' + String(i+1) + ')');

			if (row.children('.fieldName').hasClass('selected') && !row.prev().hasClass('sortFormFields') && !row.prev().children('td.fieldName').hasClass('selected')){
				row.insertBefore(row.prev('.sortFormField'));
			}
		}
		sortPosition(tempID);
	});



	//Move the position of the selected row down one row in the rows menu.
	$('body').on('click', 'div.nodeForm button.sortDownArrow', function(){

		var tempID = $(this).parents('div.sortForm').attr('id');

		for(var i=0; i < $('div#' + String(tempID) + ' table tbody tr').siblings('.sortFormField').length; i++){

			var row = $('div#' + String(tempID) + ' table tbody tr:nth-child(' + String($('div.nodeForm table tbody tr').siblings('.sortFormField').length-i) + ')');

			if (row.children('.fieldName').hasClass('selected') && !row.next().children('td.fieldName').hasClass('selected')) {
				row.insertAfter(row.next('.sortFormField'));
			}
		}
		sortPosition(tempID);
	});



	//Move the position of the selected row to the bottom of the rows menu. 
	$('body').on('click', 'div.nodeForm button.sortBottomArrow', function(){

		var tempID = $(this).parents('div.sortForm').attr('id');

		for(var i=0; i < $('div#' + String(tempID) + ' table tbody tr').siblings('.sortFormField').length; i++){

			var row = $('div#' + String(tempID) + ' table tbody tr:nth-child(' + String($('div.nodeForm table tbody tr').siblings('.sortFormField').length-i) + ')');

			if (row.children('.fieldName').hasClass('selected')){
				while(row.next().hasClass('sortFormField') && !row.next().children('td.fieldName').hasClass('selected')){
					row.insertAfter(row.next('.sortFormField'));
				}
			} 
		}
		sortPosition(tempID);
	});



	//Iterate of the orderBy option for the available fields.
	$('body').on('click', 'td.orderBy', function(){

		var ID = $(this).parents('div.sortForm').attr('id');

		if($(this).hasClass('noOrder')){
			$(this).removeClass('noOrder');
			$(this).addClass('asc');
			$(this).html('Ascending');
			$(this).siblings('.fieldName').css('font-weight', 'bold');
		} else if($(this).hasClass('asc')){
			$(this).removeClass('asc');
			$(this).addClass('desc');
			$(this).html('Descending');
		} else if($(this).hasClass('desc')){
			$(this).removeClass('desc');
			$(this).addClass('noOrder');
			$(this).html('');
			$(this).siblings('.fieldName').css('font-weight', 'normal');
			$(this).siblings('.position').html('-');
		}

		sortPosition(ID);
	});



	//When you click on a nav pill, hide all menus and then show the corresponding menu of that pill
	$('ul.nav-pills li').click(function(){

		if ($(this).hasClass('active')){
		} else{

			if($(this).hasClass('sourceNavigationPill')){
				var some = 'sourceNavigationMenu';
			} else if($(this).hasClass('recordNavigationPill')){
				var some = 'recordNavigationMenu';
			} else if($(this).hasClass('fieldNavigationPill')){
				var some = 'fieldNavigationMenu';
			} else if($(this).hasClass('viewNavigationPill')) {
				var some = 'viewNavigationMenu';
			}

			$('ul.nav-pills .active').removeClass('active');
			$(this).addClass('active');
			$('div.sourceNavigationMenu').addClass('collapse');
			$('div.recordNavigationMenu').addClass('collapse');
			$('div.fieldNavigationMenu').addClass('collapse');
			$('div.viewNavigationMenu').addClass('collapse');
			$('div.'+ some).removeClass('collapse');
		}
	});

	$('ul.nodeTitlesList li').click(function(){
		if($(this).hasClass('active')){
		} else{
			$('ul.nodeTitlesList li.active').removeClass('active');
			$(this).addClass('active');
		} 


	});

	// Run Terminal Node Object and create table tab
	var runTerminalNode = function(node, count){

		var myMap = {}
		myMap['count'] = count
		nameNode = node.name + "Node";
		attributes = nodeFormAttributes[nameNode];

		for (var i=0; i<attributes.length; i++){
			if (attributes[i]=='fields'){
				myMap[attributes[i]]=node[attributes[i]].join()
			} else{
				myMap[attributes[i]] = node[attributes[i]]
			}
		}

		$.ajax({
    		url : "/table/",
		    type : "post",
		    async: false,
		    data: myMap
		    ,success: function(response) {
		    	var wind = window.open('');
   				wind.document.write(response);
        }
		 });
	}


	// Run Process Node Object to create table in database
	var runProcessNode = function(node, count){

		var myMap = {}
		myMap['count'] = count
		nameNode = node.name + "Node";
		attributes = nodeFormAttributes[nameNode];

		for (var i=0; i<attributes.length; i++){
			if (attributes[i]=='fields'){
				myMap[attributes[i]]=node[attributes[i]].join()
			} else{
				myMap[attributes[i]] = node[attributes[i]]
			}
		}

		$.ajax({
    		url : "/table/",
		    type : "post",
		    async: false,
		    data: myMap
		 });
	}



	// Call the runProcessNode or runTerminalNode depending on the node.type
	var runNode = function(node, count){
		if (node.type == 'process'){
			runProcessNode(node, count);
		} 
		else if(node.type == 'terminal'){
			runTerminalNode(node, count);
		}
		return;
	}


	// Crete an array of node obejcts where the first object is the top of the node tree and last object is the terminal node
	var createStreamArray = function(array, node){
		if(node.parent.id != 'top'){
			array=createStreamArray(array, node.parent);
		}
		array.push(node);
		return array;
	}


	// Get the streamArray and then run each node in the array
	var runStream = function(node){

		streamArray = createStreamArray([], node);

		for (var i=0; i<streamArray.length; i++){
			runNode(streamArray[i], i);
		}
		return;
	}


	// When you click on the run button, get information of terminal node and then call the runStream function
	$('body').on('click', 'button.run', function(){

		var formID = $(this).parents('div.nodeForm').attr('id');
		var tempID = formID.substring(1, formID.length);
		var nodeObject = idToNodeObjectMap['o'+tempID];
		runStream(nodeObject)
	});



	//After a node on the canvas is dragged, change the arrows
	$('body').on('dragstop', 'div.imgNodeContainer', function(){

		var tempID = 'f' + $(this).children('img').attr('id').substring(1, $(this).children('img').attr('id').length);
		var tempNode = $.grep(allNodes, function(e){ return e.id ==tempID})[0];

		if (tempNode.parent && tempNode.parent.id!='top'){
			moveArrow(tempNode.parent.id, tempID);
		}

		var childNode = tempNode.firstChild;

		while(childNode){
			var a = moveArrow(tempID, childNode.id);
			childNode = childNode.nextSibling;
		}
	});



	$('div .tableNodeButton').click(function(){
		do{
			var tempID = String(Math.floor((Math.random()*10000) +1));
		} while ($.inArray(tempID, nodeIDs)>=0)

		var ntempID = "nsource" + tempID;
		var ftempID = "fsource" + tempID;
		nodeIDs.push(tempID);

	});


	//If you click on the sourceNodeButton, create a sourceNode on the canvas and a corresponding source form.
	$('div .sourceNodeButton').click(function(){

		do{
			var tempID = String(Math.floor((Math.random()*10000) +1));
		} while ($.inArray(tempID, nodeIDs)>=0)

		var ntempID = "nsource" + tempID;
		var ftempID = "fsource" + tempID;
		nodeIDs.push(tempID);

		$('.canvas').append("<div class='imgNodeContainer noSelect'><img id=" + ntempID +" class=\"node sourceNode noSelect\" src=\"/static/gif/sourceNode.gif\"></img><p class='imgNodeLabel noSelect'>Source</p></div>");
		$('div.imgNodeContainer').draggable();
		$('body').append(sourceFormHTML);
		$('div.newNodeForm').attr('id', ftempID);
		$('div.newNodeForm').removeClass('newNodeForm');
		var tempNode = new Node('top', ftempID, null, 'source');
		treeTop.addChild(tempNode);
		allNodes.push(tempNode);
	});



	//If someone clicks on an menu element in the source form, check if anything needs to be updated.
	$('body').on('click', 'div.sourceForm div ul.sourceFormDatabaseMenu, div.sourceForm div ul.sourceFormNFLTableMenu, div.sourceForm div table.sourceFormNFLFieldsMenu', function(){
		
		var tempID = $(this).parents('div.sourceForm').attr('id');
		var tempDatabase = $('div#' + tempID + ' div ul li.sourceFormActiveDatabaseItem').attr('name');
 		var tempTable = $('div#' + tempID + ' div ul li.sourceFormActiveTableItem').attr('name');

 		if(tempDatabase != 'selectOne' && tempTable != 'selectOne' && existsInTree(tempID, treeTop) ){

			var node = $.grep(allNodes, function(e){ return e.id == tempID})[0]
			changeFieldsDownstream(node, findFields(tempID));
			changeFormFieldsDownstream(node);
		}
	});



	//If you click on the sortNodeButton, create a sortNode on the canvas and a corresponding sort form.
	$('div .sortNodeButton').click(function(){
		do{
			var tempID = String(Math.floor((Math.random()*10000) +1));
		} while ($.inArray(tempID, nodeIDs)>=0)

		var ntempID = "nsort" + tempID;
		var ftempID = "fsort" + tempID;

		nodeIDs.push(tempID);

		$('.canvas').append("<div class='imgNodeContainer noSelect'><img id=" + ntempID +" class=\"node sortNode noSelect\" src=\"/static/gif/sortNode.gif\"></img><p class='imgNodeLabel noSelect'>Sort</p></div>");
		$('div.imgNodeContainer').draggable();
		$('body').append(sortFormHTML);
		$('div.newNodeForm').attr('id', ftempID);
		$('div.newNodeForm').removeClass('newNodeForm');

		var tempNode = new Node(null, ftempID, null, 'sort');
		allNodes.push(tempNode);
	});


	// $(document).keyup(function(){
 //    	cntrlIsPressed = false;
	// });

	// $(document).keydown(function(event){
 //    	if(event.which=="17")
 //        	cntrlIsPressed = true;
	// });

	// var cntrlIsPressed = false;

	// $('body').on({
	// 	mousedown: function(e) {
	// 		if(e.which == 1 && e.ctrlKey){
	// 			// $('div.canvas').append('hi');
	// 			// downID = 'f'+$(this).attr('id').substring(1,$(this).attr('id').length)
	// 		}
	// 	},
	// 	mouseup: function(e) {
	// 		if(e.which == 1 && e.ctrlKey){
	// 			$('div.canvas').append('hi');
	// 			// $('div.canvas').append('hi');
	// 		}
	// 	}
	// });



	$(document).keydown(function(event){
    	if(event.which=="91")
        	cmdDown = true;
	});

	$(document).keyup(function(){
    	cmdDown = false;
	});

	var cmdDown = false;

	//Function used when trying to connect nodes on the canvas. (Clicking and releasing using the middle mouse button).
	//Added the || (or) to work with Mac <- This doesn't work
	$('body').on({
		mousedown: function(e) {
			if(e.which == 2){
				downID = 'o'+$(this).attr('id').substring(1,$(this).attr('id').length);
				// downNodeType = $(this).attr('class').split(' ')[1].substring(0,$(this).attr('class').split(' ')[1].length-4);
				// downNodeName = idToNodeObjectMap[downID].name
			}
		},
		mouseup: function(e) {
			if(e.which == 2){
				upID = 'o'+$(this).attr('id').substring(1,$(this).attr('id').length);

				var downNode = idToNodeObjectMap[downID];
				var upNode = idToNodeObjectMap[upID];

				var downNodeType = downNode.name
				var upNodeType = upNode.name
				// upNodeType = $(this).attr('class').split(' ')[1].substring(0,$(this).attr('class').split(' ')[1].length-4);
				
				if(downID!=upID && downNodeType!='table' && upNodeType!='source' && !isUpstream(downID, upNode)){	
				// if(downID!=upID && downNodeType!='table' && upNodeType!='source' && !isUpstream(downID, $.grep(allNodeObjects, function(e){ return e.id == upID}))){

					// var downNode = idToNodeObjectMap[downID];
					// var upNode = idToNodeObjectMap[upID];
					// var downNode = $.grep(allNodeObjects, function(e){ return e.id == downID})[0];
					// var upNode = $.grep(allNodeObjects, function(e){ return e.id == upID})[0];


					if (upNode.parent.id != 'top'){
						upNode.parent.removeChild(upNode);
						$('svg').remove('#a' + upNode.parent.id.substring(1,upNode.parent.id.length) + upNode.id.substring(1,upNode.id.length));
					}

					downNode.addChild(upNode);
					changeFieldsDownstream(upNode, downNode.fields);
					changeFormFieldsDownstream(upNode);
					createArrow(downID, upID);

					console.log(upNode.fields)
				}
			}
		}
	}, "div.imgCanvasNodeContainer");



	//When opening the text edit menu, animate the opening of the menu.
	$('body').on('click', 'button.textEditButton', function(){
		$('div.textEditMenu').slideFadeToggle();
	});



	//Clicking on a button in the text edit menu.
	$('body').on('click', 'button.editButton', function(){
		insertIntoText($(this).val());
	});



	//Clicking the middle mouse button doesn't come up with the scroll icon
	$('body').mousedown(function(e){
		if(e.button==1){
			return false
		}
	});

 

	//If you click on the form' OK button, hide the source form.
	$('body').on('click', "div button.ok", function(){
		var element = $(this).parent('div.nodeForm');
		closeDivForm(element.attr('id'));
	});





	//If you click on the gray include icon, change it to black and the exclude icon to gray.
	$('body').on('click', 'img.grayinclude', function(){
		if($(this).siblings('img.grayexclude').hasClass("noshow")){
			$(this).addClass('noshow');
			$(this).siblings('img.blackexclude').addClass('noshow');
			$(this).siblings('img.blackinclude').removeClass('noshow');
			$(this).siblings('img.grayexclude').removeClass('noshow');
		}
	});



	//If you click on the gray exclude icon, change it to black and the include icon to gray.
	$('body').on('click', 'img.grayexclude', function(){
		if($(this).siblings('img.grayinclude').hasClass("noshow")){
			$(this).addClass('noshow');
			$(this).siblings('img.blackinclude').addClass('noshow');
			$(this).siblings('img.blackexclude').removeClass('noshow');
			$(this).siblings('img.grayinclude').removeClass('noshow');
		}
	});



	//If you click on a database menu item and it differs from the current active one...
	//This needs some tuneup to make it cleaner
	$('body').on('click', 'ul.sourceFormDatabaseMenu li', function(){

        var word = $(this).attr('name');
        var other = $(this).siblings('.sourceFormActiveDatabaseItem').attr('name');

        if (word != other){
        	if (word == "selectOne"){
        		var value = 'Select one <span class="caret"></span>';
        	} else{
         		var value = word + ' <span class="caret"></span>';
         	}

         	$(this).parents('div.sourceForm').find('button.sourceFormTableButton').html('Select one <span class="caret"></span>');

        	// Set the database button to have the correct text, set the table button text to "Select one" and change the active database item.
        	$(this).parents('ul.sourceFormDatabaseMenu').siblings('button.sourceFormDatabaseButton').html(value);
         	$(this).parents('div.sourceForm').find('button.sourceFormNFLTableButton').html('Select one <span class="caret"></span>');
         	$(this).siblings('li.sourceFormActiveDatabaseItem').removeClass("sourceFormActiveDatabaseItem");
         	$(this).addClass('sourceFormActiveDatabaseItem');

         	//Hide and remove the active table menu and hide and remove the active field list.
         	$(this).parents('div.sourceForm').find('ul.sourceFormTableMenu').css("visibility", "hidden");
         	$(this).parents('div.sourceForm').find('ul .sourceFormActiveTableItem').removeClass('sourceFormActiveTableItem');
         	$(this).parents('div.sourceForm').find('table.activeFieldList').css("visibility", "hidden");
         	$(this).parents('div.sourceForm').find('table.activeFieldList').removeClass('activeFieldList');

         	//If the new database item is NFL, show the NFL table menu and make it the active table item.
         	if (word=="NFL"){
         		$(this).parents('div.sourceForm').find('div ul.sourceForm' + word + 'TableMenu').css('visibility', 'visible');
				$(this).parents('div.sourceForm').find('div ul.sourceForm' + word + 'TableMenu li[name="selectOne"]').addClass('sourceFormActiveTableItem');   			}
   		}
   	});



	//If you click on a table menu item and it differs from the current active one...
	$('body').on('click', 'div ul.sourceFormNFLTableMenu li', function(){

   		var word = $(this).attr('name');
   		var other = $(this).parents('div.sourceForm').find('li.sourceFormActiveTableItem').attr('name');
   		var tempID = $(this).parents('div.sourceForm').attr('id');
		tempID = tempID.substring(1, tempID.length);
		var tempNodeObject = idToNodeObjectMap['o'+tempID]

   		// If you select a different table menu item...
   		if(word != other){


   			//Find the active database and combine it with the table name
   			var tempDB = $(this).parents('div.sourceForm').find('div ul li.sourceFormActiveDatabaseItem').attr('name');
			var tempName = tempDB + word;

   			if (word=="selectOne"){
   				var value = 'Select one <span class="caret"></span>';
   				tempNodeObject.table = '';
   				tempNodeObject.fields = [];
   			} else{
   				var value = word + ' <span class="caret"></span>';
   				tempNodeObject.table = word;
   				tempNodeObject.fields = tableFields[tempName];
   			}

   			//Set the table button to the name of the item you clicked
   			$(this).parents('div.sourceForm').find('button.sourceFormTableButton').html(value);

			$(this).parents('div.sourceForm').find('table.activeFieldList').css('visibility', 'hidden');
			$(this).parents('div.sourceForm').find('table.activeFieldList').removeClass('activeFieldList');
			$(this).parents('div.sourceForm').find('table[name=' + tempName + ']').addClass('activeFieldList');
			$(this).parents('div.sourceForm').find('table[name=' + tempName + ']').css('visibility', 'visible');
			$(this).parents('div.sourceForm').find('.sourceFormActiveTableItem').removeClass('sourceFormActiveTableItem');
			$(this).addClass('sourceFormActiveTableItem');		
		}
	});



	//If you click on a field list item, change it from INCLUDE to EXCLUDE or EXCLUDE to INCLUDE
	$('body').on('click', 'div.sourceForm div table tbody tr.NFLFields', function(){
		var formID = $(this).parents('div.sourceForm').attr('id');
		var tempID = formID.substring(1, formID.length);
		var nodeObject = idToNodeObjectMap['o'+tempID]
		var fieldName = $(this).attr('name');
		var index = nodeObject.fields.indexOf(fieldName);
		// tempNodeObject.fields.push('hi')

		if($('.excluded', this).hasClass("noshow")){
			$('.excluded', this).removeClass("noshow");
			$('.included', this).addClass("noshow");
			if (index > -1){
				nodeObject.fields.splice(index, 1);
			}
		} else if($('.included', this).hasClass("noshow")){
			$('.included', this).removeClass("noshow");
			$('.excluded', this).addClass("noshow");
			if (index == -1){
				nodeObject.fields.push(fieldName);
			}
		}

		changeFieldsDownstream(nodeObject, nodeObject.fields);
	});



	//Keep the field table menu open after you click in it
	$('body').on('click', 'div.sourceForm div table.sourceFormNFLFieldsMenu', function(){
		$(this).parent().toggleClass('open');
	});



	//If you click on the field table includeAll button, include all fields
	$('body').on('click', 'tr[name="includeAll"]', function(){
		var formID = $(this).parents('div.sourceForm').attr('id');
		var tempID = formID.substring(1, formID.length);
		var nodeObject = idToNodeObjectMap['o'+tempID];
		var tableName = $(this).parents('table.activeFieldList').attr('name');
		var fieldList=tableFields[tableName];
		nodeObject.fields = fieldList;

		for (x in fieldList){
			if($(this).parents('tbody').find('tr[name="' + fieldList[x] + '"] .included').hasClass('noshow')){
				$(this).parents('tbody').find('tr[name="' + fieldList[x] + '"] .included').removeClass('noshow');
				$(this).parents('tbody').find('tr[name="' + fieldList[x] + '"] .excluded').addClass('noshow');
			}
		}

		//Change fields downstream
		changeFieldsDownstream(nodeObject, nodeObject.fields);

	});



	//If you click on the field table excludeAll button, exclude all fields
	$('body').on('click', 'tr[name="excludeAll"]', function(){
		var formID = $(this).parents('div.sourceForm').attr('id');
		var tempID = formID.substring(1, formID.length);
		var nodeObject = idToNodeObjectMap['o'+tempID];
		nodeObject.fields = [];

		var tableName = $(this).parents('table.activeFieldList').attr('name');
		var fieldList=tableFields[tableName];
		for (x in fieldList){
			if($(this).parents('tbody').find('tr[name="' + fieldList[x] + '"] .excluded').hasClass('noshow')){
				$(this).parents('tbody').find('tr[name="' + fieldList[x] + '"] .excluded').removeClass('noshow');
				$(this).parents('tbody').find('tr[name="' + fieldList[x] + '"] .included').addClass('noshow');
			}
		}

		changeFieldsDownstream(nodeObject, nodeObject.fields);
	});
}




//Functions outside the main function.

//Create an arrow between to nodes on the canvas.
var createArrow = function(firstNodeID, secondNodeID){
	
	var thisArrow = '<svg style="position: absolute" class="arrow newArrow"><defs><marker id="arrow" markerWidth="13" markerHeight="13" refx="0" refy="4" orient="auto"><path d="M0,8 L6.9282,4 L0,0 L0,8" style="fill:black;" /></marker></defs><path class="line" d="M0,7 L30,7" style="stroke:black; stroke-width: 1.75px; fill: none;marker-end: url(#arrow);"/></svg>';
	var p = $('div#n' + firstNodeID.substring(1, firstNodeID.length));
	var pPos = p.offset();
	var t = $('div#n' + secondNodeID.substring(1, secondNodeID.length));
	var tPos = t.offset();

	$('div.canvas').append(thisArrow);
	var tempID = 'a' + firstNodeID.substring(1, firstNodeID.length)+secondNodeID.substring(1, secondNodeID.length);
	$('.newArrow').attr('id', tempID);
	$('.newArrow').removeClass('newArrow');


	var height = Math.abs(tPos.top-pPos.top)+9*2;
	var width = Math.abs(tPos.left-pPos.left)+9*2;

	$('svg#' + tempID).css('height', String(height) + 'px');
	$('svg#' + tempID).css('width', String(width) + 'px');


	var scaler = Math.abs(tPos.top-pPos.top)/Math.abs(tPos.left-pPos.left);
	if (String(scaler)=='Infinity'){
		lineXValue = 0;
		lineYValue = 26;
		arrowXValue = 0;
		arrowYValue = 11;
	} else{
		var lineXValue = Math.sqrt((26*26)/(1+(scaler*scaler)));
		var lineYValue = scaler * lineXValue;
		var arrowXValue = Math.sqrt((11*11)/(1+(scaler*scaler)));
		var arrowYValue = scaler * arrowXValue;
	}

	if (tPos.top-pPos.top >= 0 && tPos.left-pPos.left >= 0){
		var firstLeft = pPos.left + 25;
		var firstTop = pPos.top + 25;
		var secondLeft = tPos.left + 25;
		var secondTop = tPos.top + 25;
		var c = Math.sqrt(Math.pow(Math.abs(firstLeft - secondLeft),2)+Math.pow(Math.abs(firstTop - secondTop),2));

		// $('div.canvas').append(Math.atan(Math.abs(firstLeft-secondLeft)/Math.abs(firstLeft-secondLeft)));

		if(Math.PI/2-Math.atan(Math.abs(firstLeft-secondLeft)/Math.abs(firstTop-secondTop)) <= Math.PI/4){
			$('div.canvas').append('1');
			var c = Math.sqrt(Math.pow(Math.abs(firstLeft - secondLeft),2)+Math.pow(Math.abs(firstTop - secondTop),2));
			var startX = 30/c*Math.abs(firstLeft - secondLeft); //25 for radius and 5 away from node img
			var startY = 30/c*Math.abs(firstTop - secondTop);
			var endX = (c-41.2583302492)/c*Math.abs(firstLeft - secondLeft); // 30 + the height of a 13px equilateral triangle
			var endY = (c-41.2583302492)/c*Math.abs(firstTop - secondTop);

			$('svg#' + tempID).css('left', String(pPos.left-9) + 'px'); //+25-9-17
			$('svg#' + tempID).css('top', String(pPos.top-223+25) + 'px');
			$('svg#' + tempID +' path.line').attr('d', 'M' + String(startX) + ',' + String(startY) + 'L' + String(endX) + ',' + String(endY));
		} else if (Math.PI/2-Math.atan(Math.abs(firstLeft-secondLeft)/Math.abs(firstTop-secondTop)) <= 1.2924966674){
			$('div.canvas').append('2');
			var startX =  (c*25/Math.abs(firstLeft-secondLeft))*Math.abs(firstLeft-secondLeft)/c;
			var startY =  (c*25/Math.abs(firstLeft-secondLeft))*Math.abs(firstTop-secondTop)/c;
			var endX = (c-41.2583302492)/c*Math.abs(firstLeft - secondLeft); // 30 + the height of a 13px equilateral triangle
			var endY = (c-41.2583302492)/c*Math.abs(firstTop - secondTop);
			$('svg#' + tempID).css('left', String(pPos.left-9) + 'px'); //+25-9-17
			$('svg#' + tempID).css('top', String(pPos.top-223+25) + 'px');
			$('svg#' + tempID +' path.line').attr('d', 'M' + String(startX) + ',' + String(startY) + 'L' + String(endX) + ',' + String(endY));
		} else {
			$('div.canvas').append('3');
		} 
		// $('svg#' + tempID).css('left', String(pPos.left-35-9) + 'px'); //+25-9-17
		// $('svg#' + tempID).css('top', String(pPos.top-223+25) + 'px'); //+25-9-237.997
		// $('svg#' + tempID +' path.line').attr('d', 'M' + String(lineXValue+9) + ',' + String(lineYValue+9) + 'L' + String(tPos.left-pPos.left-lineXValue-arrowXValue+9) + ',' + String(tPos.top-pPos.top-lineYValue-arrowYValue+9));
	} else if (tPos.top-pPos.top < 0 && tPos.left-pPos.left >= 0){
		$('svg#' + tempID).css('left', String(pPos.left+25-9-17) + 'px');
		$('svg#' + tempID).css('top', String(tPos.top+25-9-237.997) + 'px');
		$('svg#' + tempID +' path.line').attr('d', 'M' + String(lineXValue+9) + ',' + String(height-lineYValue-9) + 'L' + String(tPos.left-pPos.left-lineXValue-arrowXValue+9) + ',' + String(lineYValue+arrowYValue+9));
	} else if (tPos.top-pPos.top >= 0 && tPos.left-pPos.left <= 0){
		$('svg#' + tempID).css('left', String(tPos.left+25-9-17) + 'px');
		$('svg#' + tempID).css('top', String(pPos.top+25-9-237.997) + 'px');
		$('svg#' + tempID +' path.line').attr('d', 'M' + String(width-lineXValue-9) + ',' + String(lineYValue+9) + 'L' + String(lineXValue+arrowXValue+9) + ',' + String(tPos.top-pPos.top-lineYValue-arrowYValue+9));
	} else {
		$('svg#' + tempID).css('left', String(tPos.left+25-9-17) + 'px');
		$('svg#' + tempID).css('top', String(tPos.top+25-9-237.997) + 'px');
		$('svg#' + tempID +' path.line').attr('d', 'M' + String(width-lineXValue-9) + ',' + String(height-lineYValue-9) + 'L' + String(lineXValue+arrowXValue+9) + ',' + String(lineYValue+arrowYValue+9));
	}
}




//Adjust the arrows between nodes on the canvas if one is moved.
var moveArrow = function(pID, tID){

	var tempID = 'a' + pID.substring(1, pID.length) + tID.substring(1, tID.length);
	var p = $('img#n' + pID.substring(1, pID.length));
	var pPos = p.offset();
	var t = $('img#n' + tID.substring(1, tID.length));
	var tPos = t.offset();
	var height = Math.abs(tPos.top-pPos.top)+9*2;
	var width = Math.abs(tPos.left-pPos.left)+9*2;

	$('svg#' + tempID).css('height', String(height) + 'px');
	$('svg#' + tempID).css('width', String(width) + 'px');

	var scaler = Math.abs(tPos.top-pPos.top)/Math.abs(tPos.left-pPos.left);

	if (String(scaler)=='Infinity'){
		lineXValue = 0;
		lineYValue = 26;
		arrowXValue = 0;
		arrowYValue = 11;
	} else{
		var lineXValue = Math.sqrt((26*26)/(1+(scaler*scaler)));
		var lineYValue = scaler * lineXValue;
		var arrowXValue = Math.sqrt((11*11)/(1+(scaler*scaler)));
		var arrowYValue = scaler * arrowXValue;
	}

	if (tPos.top-pPos.top >= 0 && tPos.left-pPos.left >= 0){
		$('svg#' + tempID).css('left', String(pPos.left+25-9-17) + 'px');
		$('svg#' + tempID).css('top', String(pPos.top+25-9-237.997) + 'px');
		$('svg#' + tempID +' path.line').attr('d', 'M' + String(lineXValue+9) + ',' + String(lineYValue+9) + 'L' + String(tPos.left-pPos.left-lineXValue-arrowXValue+9) + ',' + String(tPos.top-pPos.top-lineYValue-arrowYValue+9));
	} else if (tPos.top-pPos.top < 0 && tPos.left-pPos.left >= 0){
		$('svg#' + tempID).css('left', String(pPos.left+25-9-17) + 'px');
		$('svg#' + tempID).css('top', String(tPos.top+25-9-237.997) + 'px');
		$('svg#' + tempID +' path.line').attr('d', 'M' + String(lineXValue+9) + ',' + String(height-lineYValue-9) + 'L' + String(tPos.left-pPos.left-lineXValue-arrowXValue+9) + ',' + String(lineYValue+arrowYValue+9));
	} else if (tPos.top-pPos.top >= 0 && tPos.left-pPos.left <= 0){
		$('svg#' + tempID).css('left', String(tPos.left+25-9-17) + 'px');
		$('svg#' + tempID).css('top', String(pPos.top+25-9-237.997) + 'px');
		$('svg#' + tempID +' path.line').attr('d', 'M' + String(width-lineXValue-9) + ',' + String(lineYValue+9) + 'L' + String(lineXValue+arrowXValue+9) + ',' + String(tPos.top-pPos.top-lineYValue-arrowYValue+9));
	} else {
		$('svg#' + tempID).css('left', String(tPos.left+25-9-17) + 'px');
		$('svg#' + tempID).css('top', String(tPos.top+25-9-237.997) + 'px');
		$('svg#' + tempID +' path.line').attr('d', 'M' + String(width-lineXValue-9) + ',' + String(height-lineYValue-9) + 'L' + String(lineXValue+arrowXValue+9) + ',' + String(lineYValue+arrowYValue+9));
	}
}



//Find the fields of a node given an id.
var findFields = function(id){
	if (id.substring(1,7) == 'source'){
		var tempDatabase = $('div#' + id + ' div ul li.sourceFormActiveDatabaseItem').attr('name');
		var tempTable = $('div#' + id + ' div ul li.sourceFormActiveTableItem').attr('name');
		
		if (tempDatabase + tempTable == 'NFLTEAM'){

			var tempArray = tableFields[tempDatabase + tempTable];
			var newArray = [];
			var tempLength = tempArray.length;

			for (i=1; i<tempLength; i++){
				if($('div#' + id + ' div table[name=' + tempDatabase + tempTable + '] tbody tr:nth-child(' + String(3+i) + ') td.excluded').hasClass('noshow')) {
					newArray.push($('div#' + id + ' div table[name=' + tempDatabase + tempTable + '] tbody tr:nth-child(' + String(3+i) + ')').attr('name'));	
				}
			}
			return newArray;
		}
	}
}



//Return a node if a given 'id' belongs to a node in a tree with root 'node'.
var findNode = function(id, node){
	var answer = null;
	if (node){
		if(node.id == id){
			answer = node;
		} else {
			if (node.firstChild){
				var tempAns = findNode(id, node.firstChild);
				if (tempAns){
					answer=tempAns;
				}
			}

			if (node.nextSibling){
				var tempAns = findNode(id, node.nextSibling);
				if (tempAns){
					answer=tempAns;
				}
			}
		}
	}
	return answer;
}



//Return a boolean if a given 'id' belongs to a node in a tree with root 'node'.
var existsInTree = function(id, node){
	var answer = false;
	if (node){
		if(node.id == id){
			answer = true;
			return answer;
		} else {
			if (node.firstChild){
				var tempAns = existsInTree(id, node.firstChild);
				if (tempAns){
					answer=tempAns;
				}
			}

			if (node.nextSibling){
				var tempAns = existsInTree(id, node.nextSibling);
				if (tempAns){
					answer=tempAns;
				}
			}
			return answer;
		}
	}
	return answer;
}



//Return a boolean if a given 'id' is upstream from a given 'node'.
var isUpstream = function(id, node){
	var answer = false;
	while(node.parent){
		if(node.id == id){
			answer = true;
			break;
		}
		node = node.parent;
	}
	return answer;
}



//If a node changes the available fields upstream, update the available fields in the nodes downstream
var changeFieldsDownstream = function(node, fields){

	// console.log(fields)
	if(node.firstChild){
		changeFieldsDownstream(node.firstChild, fields);
	}

	if(node.nextSibling){
		changeFieldsDownstream(node.nextSibling, fields);
	}

	node.fields = fields;
	return;
}



//Return a node if the given 'id' is found as a child of the given root 'node'.
var findChild = function(id, node){
	var answer = null;
	if (node){
		if(node.id == id){
			answer = node;
		} else if (node.nextSibling){
			var tempAns = findChild(id, node.nextSibling);
			if (tempAns){
				answer=tempAns;
			}
		}
	}
	return answer;
}



//Run the main function when the document is ready
$(document).ready(main);

