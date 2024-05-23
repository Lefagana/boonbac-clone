
function setOptions(chosen) {
	var selbox = document.myform.property_state_name;
		selbox.options.length = 0;
		if (chosen == " ") {
			selbox.options[selbox.options.length] = new Option('Please select Country',' ');
		}
		if (chosen == "Nigeria") {
			selbox.options[selbox.options.length] = new
			Option('Please Select','Please Select');
			selbox.options[selbox.options.length] = new
			Option('Abia','Abia');
			selbox.options[selbox.options.length] = new
			Option('Anambra','Anambra');
			selbox.options[selbox.options.length] = new
			Option('Akwa Ibom','Akwa Ibom');
			selbox.options[selbox.options.length] = new
			Option('Adamawa','Adamawa');
			selbox.options[selbox.options.length] = new
			Option('Bauchi','Bauchi');
			selbox.options[selbox.options.length] = new
			Option('Bayelsa','Bayelsa');
			selbox.options[selbox.options.length] = new
			Option('Benue','Benue');
			selbox.options[selbox.options.length] = new
			Option('Borno','Borno');
			selbox.options[selbox.options.length] = new
			Option('Cross River','Cross River');
			selbox.options[selbox.options.length] = new
			Option('Delta','Delta');
			selbox.options[selbox.options.length] = new
			Option('Ebonyi','Ebonyi');
			selbox.options[selbox.options.length] = new
			Option('Edo','Edo');
			selbox.options[selbox.options.length] = new
			Option('Ekiti','Ekiti');
			selbox.options[selbox.options.length] = new
			Option('FCT','FCT');
			selbox.options[selbox.options.length] = new
			Option('Enugu','Enugu');
			selbox.options[selbox.options.length] = new
			Option('Gombe','Gombe');
			selbox.options[selbox.options.length] = new
			Option('Imo','Imo');
			selbox.options[selbox.options.length] = new
			Option('Jigawa','Jigawa');
			selbox.options[selbox.options.length] = new
			Option('Kaduna','Kaduna');
			selbox.options[selbox.options.length] = new
			Option('Kano','Kano');
			selbox.options[selbox.options.length] = new
			Option('Katsina','Katsina');
			selbox.options[selbox.options.length] = new
			Option('Kebbi','Kebbi');
			selbox.options[selbox.options.length] = new
			Option('Kogi','Kogi');
			selbox.options[selbox.options.length] = new
			Option('Kwara','Kwara');
			selbox.options[selbox.options.length] = new
			Option('Lagos','Lagos');
			selbox.options[selbox.options.length] = new
			Option('Nasarawa','Nasarawa');
			selbox.options[selbox.options.length] = new
			Option('Niger','Niger');
			selbox.options[selbox.options.length] = new
			Option('Ogun','Ogun');
			selbox.options[selbox.options.length] = new
			Option('Ondo','Ondo');
			selbox.options[selbox.options.length] = new
			Option('Osun','Osun');
			selbox.options[selbox.options.length] = new
			Option('Oyo','Oyo');
			selbox.options[selbox.options.length] = new
			Option('Plateau','Plateau');
			selbox.options[selbox.options.length] = new
			Option('Rivers','Rivers');
			selbox.options[selbox.options.length] = new
			Option('Sokoto','Sokoto');
			selbox.options[selbox.options.length] = new
			Option('Taraba','Taraba');
			selbox.options[selbox.options.length] = new
			Option('Yobe','Yobe');
			selbox.options[selbox.options.length] = new
			Option('Zamfara','Zamfara');
		}
		if (chosen != "Nigeria") {
			selbox.options[selbox.options.length] = new
			Option('N/A','N/A');
		}
			var selbox = document.myform.property_city_name;
			selbox.options.length = 0;
			selbox.options[selbox.options.length] = new Option('Select City/LGA','Select City/LGA');
			
}
// get property_city_name
function setOptionsproperty_city_name(chosen) {
	var selbox = document.myform.property_city_name;
	selbox.options.length = 0;
	if (chosen == " ") {
		selbox.options[selbox.options.length] = new Option('Please Select','Please Select');
	}
	if (chosen == "Yobe") {
			selbox.options[selbox.options.length] = new
			Option('       ','     ');
			selbox.options[selbox.options.length] = new
			Option('Bade','Bade');
			selbox.options[selbox.options.length] = new
			Option('Damaturu','Damaturu');
			selbox.options[selbox.options.length] = new
			Option('Fune','Fune');
			selbox.options[selbox.options.length] = new
			Option('Potiskum','Potiskum');
			selbox.options[selbox.options.length] = new
			Option('Fika','Fika');
			selbox.options[selbox.options.length] = new
			Option('Nangere','Nangere');
			selbox.options[selbox.options.length] = new
			Option('Jakusko','Jakusko');
			selbox.options[selbox.options.length] = new
			Option('Geidam','Geidam');
			selbox.options[selbox.options.length] = new
			Option('Nguru','Nguru');
			selbox.options[selbox.options.length] = new
			Option('Gujba','Gujba');
			selbox.options[selbox.options.length] = new
			Option('Gulani','Gulani');
			selbox.options[selbox.options.length] = new
			Option('Yusufari','Yusufari');
			selbox.options[selbox.options.length] = new
			Option('Yunusari','Yunusari');
			selbox.options[selbox.options.length] = new
			Option('Bursari','Bursari');
			selbox.options[selbox.options.length] = new
			Option('Machina','Machina');
			selbox.options[selbox.options.length] = new
			Option('Tarmua','Tarmua');
			selbox.options[selbox.options.length] = new
			Option('Karasuwa','Karasuwa');
}
	if (chosen == "FCT") {
			selbox.options[selbox.options.length] = new
			Option('','');
			selbox.options[selbox.options.length] = new
			Option('Gwagwalada','Gwagwalada');
			selbox.options[selbox.options.length] = new
			Option('Kuje','Kuje');
			selbox.options[selbox.options.length] = new
			Option('Abaji','Abaji');
			selbox.options[selbox.options.length] = new
			Option('Abuja Municipal','Abuja Municipal');
			selbox.options[selbox.options.length] = new
			Option('Bwari','Bwari');
			selbox.options[selbox.options.length] = new
			Option('Kwali','Kwali');
	}
	if (chosen == "Abia") {
			 selbox.options[selbox.options.length] = new
			 Option('','');
			 selbox.options[selbox.options.length] = new
			 Option('Aba North','Aba North ');
			 selbox.options[selbox.options.length] = new
			 Option('Aba South','Aba South ');
			 selbox.options[selbox.options.length] = new
			 Option('Arochukwu','Arochukwu'); 
			 selbox.options[selbox.options.length] = new
			 Option('Bende','Bende');  
			 selbox.options[selbox.options.length] = new
			 Option('Ikwuano','Ikwuano');  
			 selbox.options[selbox.options.length] = new
			 Option('Isiala-Ngwa North','Isiala-Ngwa North');
			 selbox.options[selbox.options.length] = new			 
			 Option('Isiala-Ngwa South','Isiala-Ngwa South'); 
			 selbox.options[selbox.options.length] = new
			 Option('Isuikwato','Isuikwato'); 
			 selbox.options[selbox.options.length] = new			 
			 Option('Obi Nwa','Obi Nwa'); 
			 selbox.options[selbox.options.length] = new
			 Option('Ohafia','Ohafia'); 
			 selbox.options[selbox.options.length] = new
			 Option('Osisioma','Osisioma'); 
			selbox.options[selbox.options.length] = new
			 Option('Ngwa','Ngwa');   
			 selbox.options[selbox.options.length] = new
			 Option('Ugwunagbo','Ugwunagbo');
			 selbox.options[selbox.options.length] = new
			 Option('Ukwa East','Ukwa East');  
			 selbox.options[selbox.options.length] = new
			 Option('Ukwa West','Ukwa West');
			 selbox.options[selbox.options.length] = new
			 Option('Umuahia North','Umuahia North');   
			 selbox.options[selbox.options.length] = new
			 Option('Umuahia South','Umuahia South');   
			 selbox.options[selbox.options.length] = new
			 Option('Umu-Neochi','Umu-Neochi'); 
	}
	if (chosen == "Adamawa") {
			selbox.options[selbox.options.length] = new
			Option('','');
			selbox.options[selbox.options.length] = new
			Option('Demsa','Demsa');
			selbox.options[selbox.options.length] = new
			Option('Fufore',' Fufore');
			selbox.options[selbox.options.length] = new
			Option('Ganye','Ganye'); 
			selbox.options[selbox.options.length] = new
			Option('Gireri','Gireri'); 
			selbox.options[selbox.options.length] = new
			Option('Gombi','Gombi'); 
			selbox.options[selbox.options.length] = new
			Option('Guyuk','Guyuk'); 
			selbox.options[selbox.options.length] = new
			Option('Hong','Hong'); 
			selbox.options[selbox.options.length] = new
			Option('Jada','Jada'); 
			selbox.options[selbox.options.length] = new
			Option('Lamurde','Lamurde'); 
			selbox.options[selbox.options.length] = new
			Option('Madagali','Madagali');
			selbox.options[selbox.options.length] = new
			Option('Maiha','Maiha');  
			selbox.options[selbox.options.length] = new
			Option('Mayo-Belwa','Mayo-Belwa');  
			selbox.options[selbox.options.length] = new
			Option('Michika','Michika');  
			selbox.options[selbox.options.length] = new
			Option('Mubi North','Mubi North'); 
			selbox.options[selbox.options.length] = new
			Option('Mubi South','Mubi South');  
			selbox.options[selbox.options.length] = new
			Option('Numan','Numan'); 
			selbox.options[selbox.options.length] = new
			Option('Shelleng','Shelleng');  
			selbox.options[selbox.options.length] = new
			Option('Song','Song'); 
			selbox.options[selbox.options.length] = new
			Option('Toungo','Toungo');  
			selbox.options[selbox.options.length] = new
			Option('Yola North','Yola North'); 
			selbox.options[selbox.options.length] = new
			Option('Yola South','Yola South'); 
	}
	if (chosen == "Akwa Ibom") {
			selbox.options[selbox.options.length] = new
			Option('','');
			selbox.options[selbox.options.length] = new
			Option('Abak','Abak');
			selbox.options[selbox.options.length] = new
			Option('Eastern Obolo',' Eastern Obolo');
			selbox.options[selbox.options.length] = new
			Option('Eket','Eket');
			selbox.options[selbox.options.length] = new
			Option('Esit Eket','Esit Eket');
			selbox.options[selbox.options.length] = new
			Option('Essien Udim','Essien Udim');
			selbox.options[selbox.options.length] = new
			Option('Etim Ekpo','Etim Ekpo');
			selbox.options[selbox.options.length] = new
			Option('Etinan','Etinan'); 
			selbox.options[selbox.options.length] = new
			Option('Ibeno','Ibeno'); 
			selbox.options[selbox.options.length] = new
			Option('Ibesikpo Asutan','Ibsikpo Asutan');
			selbox.options[selbox.options.length] = new
			Option('Ibiono Ibom','Ibiono Ibom');
			selbox.options[selbox.options.length] = new
			Option('Ika','Ika');
			selbox.options[selbox.options.length] = new
			Option('Ikono','Ikono');
			selbox.options[selbox.options.length] = new
			Option('Ikot Abasi','Ikot Abasi'); 
			selbox.options[selbox.options.length] = new
			Option('Ikot Ekpene','Ikot Ekpene'); 
			selbox.options[selbox.options.length] = new
			Option('Ini','Ini');
			selbox.options[selbox.options.length] = new
			Option('Itu','Itu');
			selbox.options[selbox.options.length] = new
			Option('Mbo','Mbo');
			selbox.options[selbox.options.length] = new
			Option('Mkpat Enin','Mkpat Eni');
			selbox.options[selbox.options.length] = new
			Option('Nsit Atai','Nsit Atai'); 
			selbox.options[selbox.options.length] = new
			Option('Nsit Ibom','Nsit Ibom');
			selbox.options[selbox.options.length] = new
			Option('Nsit Ubium','Nsit Akara');
			selbox.options[selbox.options.length] = new
			Option('Obot Akara','Obot Akara');
			selbox.options[selbox.options.length] = new
			Option('Okobo','Okobo');
			selbox.options[selbox.options.length] = new
			Option('Onna','Onna');
			selbox.options[selbox.options.length] = new
			Option('Oron','Oron');
			selbox.options[selbox.options.length] = new
			Option('Oruk Anam','Oruk Anam');
			selbox.options[selbox.options.length] = new
			Option('Udung Uko','Udung Uko');
			selbox.options[selbox.options.length] = new
			Option('Ukanafun','Ukanafun');
			selbox.options[selbox.options.length] = new
			Option('Uruan','Uruan');
			selbox.options[selbox.options.length] = new
			Option('Urue-Offong/Oruko','Urue-Offong/oruko');
			selbox.options[selbox.options.length] = new
			Option('Uyo','Uyo');
	}
	if (chosen == "Anambra") {
			selbox.options[selbox.options.length] = new
			Option('','');
			selbox.options[selbox.options.length] = new
			Option('Aguata','Aguata');
			selbox.options[selbox.options.length] = new
			Option('Anambra East','Anambra East');
			selbox.options[selbox.options.length] = new
			Option('Anambra West','Anambra West');
			selbox.options[selbox.options.length] = new
			Option('Anaocha','Anaocha');
			selbox.options[selbox.options.length] = new
			Option('Awka North','Akwa North');
			selbox.options[selbox.options.length] = new
			Option('Awka South','Awka South');
			selbox.options[selbox.options.length] = new
			Option('Ayamelum','Ayamelum');
			selbox.options[selbox.options.length] = new
			Option('Dunukofia','Dunukofia');
			selbox.options[selbox.options.length] = new
			Option('Ekwusigo','Ekwusigo');
			selbox.options[selbox.options.length] = new
			Option('Idemili North','Idemili North');
			selbox.options[selbox.options.length] = new
			Option('Idemili south','Idemili South');
			selbox.options[selbox.options.length] = new
			Option('Ihiala','Ihiala');
			selbox.options[selbox.options.length] = new
			Option('Njikoka','Njikoka');
			selbox.options[selbox.options.length] = new
			Option('Nnewi North','Nnewi North');
			selbox.options[selbox.options.length] = new
			Option('Nnewi South','Nwewi South');
			selbox.options[selbox.options.length] = new
			Option('Ogbaru','Ogbaru');
			selbox.options[selbox.options.length] = new
			Option('Onitsha North','Onitsha North');
			selbox.options[selbox.options.length] = new
			Option('Onitsha South','Onitsha South');
			selbox.options[selbox.options.length] = new
			Option('Orumba North','Orumba North');
			selbox.options[selbox.options.length] = new
			Option('Orumba South','Orumba South');
			selbox.options[selbox.options.length] = new
			Option('Oyi','Oyi');
	}
	if (chosen == "Bauchi") {
			selbox.options[selbox.options.length] = new
			Option('','');
			selbox.options[selbox.options.length] = new
			Option('Alkaleri','Alkaleri');
			selbox.options[selbox.options.length] = new
			Option('Bauchi','Bauchi');
			selbox.options[selbox.options.length] = new
			Option('Bogoro','Bogoro');
			selbox.options[selbox.options.length] = new
			Option('Damban','Damban');
			selbox.options[selbox.options.length] = new
			Option('Darazo','Darazo');
			selbox.options[selbox.options.length] = new
			Option('Dass','Dass');
			selbox.options[selbox.options.length] = new
			Option('Ganjuwa','Ganjuwa');
			selbox.options[selbox.options.length] = new
			Option('Giade','Giade');
			selbox.options[selbox.options.length] = new
			Option('Itas/Gadau','Itas/Gadau');
			selbox.options[selbox.options.length] = new
			Option('Jamaare','Jamaare');
			selbox.options[selbox.options.length] = new
			Option('Katagum','Katagum');
			selbox.options[selbox.options.length] = new
			Option('Kirfi','Kirfi');
			selbox.options[selbox.options.length] = new
			Option('Misau','Misau');
			selbox.options[selbox.options.length] = new
			Option('Ningi','Ningi');
			selbox.options[selbox.options.length] = new
			Option('Shira','Shira');
			selbox.options[selbox.options.length] = new
			Option('Tafawa-Balewa','Tafawa-Balewa');
			selbox.options[selbox.options.length] = new
			Option('Toro','Toro');
			selbox.options[selbox.options.length] = new
			Option('Warji','Warji');
			selbox.options[selbox.options.length] = new
			Option('Zaki','Zaki');
	}
	if (chosen == "Bayelsa") {
			selbox.options[selbox.options.length] = new
			Option('','');
			selbox.options[selbox.options.length] = new
			Option('Brass','Brass');
			selbox.options[selbox.options.length] = new
			Option('Ekeremor','Ekeremor');
			selbox.options[selbox.options.length] = new
			Option('Kolokuma/Opokuma','Kolokuma/Opokuma');
			selbox.options[selbox.options.length] = new
			Option('Nembe','Nembe');
			selbox.options[selbox.options.length] = new
			Option('Ogbia','Ogbia');
			selbox.options[selbox.options.length] = new
			Option('Sagbama','Sagbama');
			selbox.options[selbox.options.length] = new
			Option('Southern Jaw','South Jaw');
			selbox.options[selbox.options.length] = new
			Option('Yenegoa','Yenegoa');
	}
	if (chosen == "Benue") {
			selbox.options[selbox.options.length] = new
			Option('','');
			selbox.options[selbox.options.length] = new
			Option('Ado','Ado');
			selbox.options[selbox.options.length] = new
			Option('Agatu','Agatu');
			selbox.options[selbox.options.length] = new
			Option('Apa','Apa');
			selbox.options[selbox.options.length] = new
			Option('Buruku','Buruku'); 
			selbox.options[selbox.options.length] = new
			Option('Gboko','Gboko'); 
			selbox.options[selbox.options.length] = new
			Option('Guma','Guma');
			selbox.options[selbox.options.length] = new
			Option('Gwer East','Gwer East'); 
			selbox.options[selbox.options.length] = new
			Option('Gwer West','Gwer West'); 
			selbox.options[selbox.options.length] = new
			Option('Katsina-Ala','Katsina-Ala');
			selbox.options[selbox.options.length] = new
			Option('Konshisha','Konshisha'); 
			selbox.options[selbox.options.length] = new
			Option('Kwande','Kwande');
			selbox.options[selbox.options.length] = new
			Option('Logo','Logo');
			selbox.options[selbox.options.length] = new
			Option('Makurdi','Makurdi'); 
			selbox.options[selbox.options.length] = new
			Option('Obi','Obi');
			selbox.options[selbox.options.length] = new
			Option('Ogbadibo','Ogbadibo');
			selbox.options[selbox.options.length] = new
			Option('Oju','Oju');
			selbox.options[selbox.options.length] = new
			Option('Okpokwu','Okpokwu');
			selbox.options[selbox.options.length] = new
			Option('Ohimini','Ohimini');
			selbox.options[selbox.options.length] = new
			Option('Oturkpo','Oturkpo');
			selbox.options[selbox.options.length] = new
			Option('Tarka','Tarka');
			selbox.options[selbox.options.length] = new
			Option('Ukum','Ukum');
			selbox.options[selbox.options.length] = new
			Option('Ushongo','Ushango');
			selbox.options[selbox.options.length] = new
			Option('Vandeikya','Vandeikya'); 
	}
	if (chosen == "Borno") {
			selbox.options[selbox.options.length] = new
			Option('','');
			selbox.options[selbox.options.length] = new
			Option('Abadam','Abadam'); 
			selbox.options[selbox.options.length] = new
			Option('Askira/Uba','Askira/Uba'); 
			selbox.options[selbox.options.length] = new
			Option('Bama','Bama'); 
			selbox.options[selbox.options.length] = new
			Option('Bayo','Bayo'); 
			selbox.options[selbox.options.length] = new
			Option('Biu','Biu'); 
			selbox.options[selbox.options.length] = new
			Option('Chibok','Chibok'); 
			selbox.options[selbox.options.length] = new
			Option('Damboa','Damboa'); 
			selbox.options[selbox.options.length] = new
			Option('Dikwa','Dikwa'); 
			selbox.options[selbox.options.length] = new
			Option('Gubio','Gubio'); 
			selbox.options[selbox.options.length] = new
			Option('Guzamala','Guzamala'); 
			selbox.options[selbox.options.length] = new
			Option('Gwoza','Gwoza'); 
			selbox.options[selbox.options.length] = new
			Option('Hawul','Hawul'); 
			selbox.options[selbox.options.length] = new
			Option('Jere','Jere'); 
			selbox.options[selbox.options.length] = new
			Option('Kaga','Kaga'); 
			selbox.options[selbox.options.length] = new
			Option('Kala/Balge','Kala/Balge'); 
			selbox.options[selbox.options.length] = new
			Option('Konduga','Konduga'); 
			selbox.options[selbox.options.length] = new
			Option('Kukawa','Kukawa'); 
			selbox.options[selbox.options.length] = new
			Option('Kwaya Kusar','Kwaya Kusar'); 
			selbox.options[selbox.options.length] = new
			Option('Mafa','Mafa'); 
			selbox.options[selbox.options.length] = new
			Option('Magumeri','Magumeri'); 
			selbox.options[selbox.options.length] = new
			Option('Maiduguri','Maiduguri'); 
			selbox.options[selbox.options.length] = new
			Option('Marte','Marte'); 
			selbox.options[selbox.options.length] = new
			Option('Mobbar','Mobbar'); 
			selbox.options[selbox.options.length] = new
			Option('Monguno','Monguno'); 
			selbox.options[selbox.options.length] = new
			Option('Ngala','Ngala'); 
			selbox.options[selbox.options.length] = new
			Option('Nganzai','Nganzai'); 
			selbox.options[selbox.options.length] = new
			Option('Shani','Shani');  
	} 
	if (chosen == "Cross River") {
		selbox.options[selbox.options.length] = new
		Option('','');
		selbox.options[selbox.options.length] = new
		Option('Akpabuyo','Akpabuyo');
		selbox.options[selbox.options.length] = new
		Option('Odukpani','Odukpani');
		selbox.options[selbox.options.length] = new
		Option('Akamkpa','Akamkpa');
		selbox.options[selbox.options.length] = new
		Option('Biase','Biase');
		selbox.options[selbox.options.length] = new
		Option('Abi','Abi');
		selbox.options[selbox.options.length] = new
		Option('Ikom','Ikom');
		selbox.options[selbox.options.length] = new
		Option('Yarkur','Yarkur');
		selbox.options[selbox.options.length] = new
		Option('Odubra','Odubra');
		selbox.options[selbox.options.length] = new
		Option('Boki','Boki');
		selbox.options[selbox.options.length] = new
		Option('Ogoja','Ogoja');
		selbox.options[selbox.options.length] = new
		Option('Yala','Yala');
		selbox.options[selbox.options.length] = new
		Option('Obanliku','Obanliku');
		selbox.options[selbox.options.length] = new
		Option('Obudu','Obudu');
		selbox.options[selbox.options.length] = new
		Option('Calabar South','Calabar South');
		selbox.options[selbox.options.length] = new
		Option('Etung','Etung');
		selbox.options[selbox.options.length] = new
		Option('Bekwara','Bekwara');
		selbox.options[selbox.options.length] = new
		Option('Bakassi','Bakassi');
		selbox.options[selbox.options.length] = new
		Option('Calabar Municipality','Calabar Municipality');

	} 
	if (chosen == "Delta") {
			selbox.options[selbox.options.length] = new
			Option('','');
			selbox.options[selbox.options.length] = new
			Option('Oshimili','Oshimili');
			selbox.options[selbox.options.length] = new
			Option('Aniocha','Aniocha');
			selbox.options[selbox.options.length] = new
			Option('Aniocha South','Aniocha South');
			selbox.options[selbox.options.length] = new
			Option('Ika South','Ika South');
			selbox.options[selbox.options.length] = new
			Option('Ika North-East','Ika North-East');
			selbox.options[selbox.options.length] = new
			Option('Ndokwa West','Ndokwa West');
			selbox.options[selbox.options.length] = new
			Option('Ndokwa East','Ndokwa East');
			selbox.options[selbox.options.length] = new
			Option('Isoko south','Isoko south');
			selbox.options[selbox.options.length] = new
			Option('Isoko North','Isoko North');
			selbox.options[selbox.options.length] = new
			Option('Bomadi','Bomadi');
			selbox.options[selbox.options.length] = new
			Option('Burutu','Burutu');
			selbox.options[selbox.options.length] = new
			Option('Ughelli South','Ughelli South');
			selbox.options[selbox.options.length] = new
			Option('Ughelli North','Ughelli North');
			selbox.options[selbox.options.length] = new
			Option('Ethiope West','Ethiope West');
			selbox.options[selbox.options.length] = new
			Option('Ethiope East','Ethiope East');
			selbox.options[selbox.options.length] = new
			Option('Sapele','Sapele');
			selbox.options[selbox.options.length] = new
			Option('Okpe','Okpe');
			selbox.options[selbox.options.length] = new
			Option('Warri North','Warri North');
			selbox.options[selbox.options.length] = new
			Option('Warri South','Warri South');
			selbox.options[selbox.options.length] = new
			Option('Uvwie','Uvwie');
			selbox.options[selbox.options.length] = new
			Option('Udu','Udu');
			selbox.options[selbox.options.length] = new
			Option('Warri Central','Warri Central');
			selbox.options[selbox.options.length] = new
			Option('Ukwani','Ukwani');
			selbox.options[selbox.options.length] = new
			Option('Oshimili North','Oshimili North');
			selbox.options[selbox.options.length] = new
			Option('Patani','Patani');
	} 
	if (chosen == "Ebonyi") {
			selbox.options[selbox.options.length] = new
			Option('','');
			selbox.options[selbox.options.length] = new
			Option('Afikpo South','Afikpo South'); 
			selbox.options[selbox.options.length] = new
			Option('Afikpo North','Afikpo North'); 
			selbox.options[selbox.options.length] = new
			Option('Onicha','Onicha'); 
			selbox.options[selbox.options.length] = new
			Option('Ohaozara','Ohaozara'); 
			selbox.options[selbox.options.length] = new
			Option('Abakaliki','Abakaliki'); 
			selbox.options[selbox.options.length] = new
			Option('Ishielu','Ishielu'); 
			selbox.options[selbox.options.length] = new
			Option('lkwo','lkwo'); 
			selbox.options[selbox.options.length] = new
			Option('Ezza','Ezza'); 
			selbox.options[selbox.options.length] = new
			Option('Ezza South','Ezza South');
			selbox.options[selbox.options.length] = new
			Option('Ohaukwu','Ohaukwu');
			selbox.options[selbox.options.length] = new
			Option('Ebonyi','Ebonyi');
			selbox.options[selbox.options.length] = new
			Option('Ivo','Ivo');
	}
	if (chosen == "Edo") {
			selbox.options[selbox.options.length] = new
			Option('','');
			selbox.options[selbox.options.length] = new
			Option('Esan North-East','Esan North-East');
			selbox.options[selbox.options.length] = new
			Option('Esan Central','Esan Central');
			selbox.options[selbox.options.length] = new
			Option('Esan West','Esan West');
			selbox.options[selbox.options.length] = new
			Option('Egor','Egor');
			selbox.options[selbox.options.length] = new
			Option('Ukpoba','Ukpoba');
			selbox.options[selbox.options.length] = new
			Option('Central','Central');
			selbox.options[selbox.options.length] = new
			Option('Etsako Central','Etsako Central');
			selbox.options[selbox.options.length] = new
			Option('Igueben','Igueben');
			selbox.options[selbox.options.length] = new
			Option('Oredo','Oredo');
			selbox.options[selbox.options.length] = new
			Option('Ovia SouthWest','Ovia SouthWest');
			selbox.options[selbox.options.length] = new
			Option('Ovia South-East','Ovia South-East');
			selbox.options[selbox.options.length] = new
			Option('Orhionwon','Orhionwon');
			selbox.options[selbox.options.length] = new
			Option('Uhunmwonde','Uhunmwonde');
			selbox.options[selbox.options.length] = new
			Option('Etsako East','Etsako East');
			selbox.options[selbox.options.length] = new
			Option('Esan South-East','Esan South-East');
	}
	if (chosen == "Ekiti") {
			selbox.options[selbox.options.length] = new
			Option('','');
			selbox.options[selbox.options.length] = new
			Option('Ado','Ado');
			selbox.options[selbox.options.length] = new
			Option('Ekiti-East','Ekiti-East');
			selbox.options[selbox.options.length] = new
			Option('Ekiti-West','Ekiti-West');
			selbox.options[selbox.options.length] = new
			Option('Emure/Ise/Orun','Emure/Ise/Orun');
			selbox.options[selbox.options.length] = new
			Option('Ekiti South-West','Ekiti South-West');
			selbox.options[selbox.options.length] = new
			Option('Ikare','Ikare');
			selbox.options[selbox.options.length] = new
			Option('Irepodun','Irepodun');
			selbox.options[selbox.options.length] = new
			Option('Ijero','Ijero');
			selbox.options[selbox.options.length] = new
			Option('Ido/Osi','Ido/Osi');
			selbox.options[selbox.options.length] = new
			Option('Oye','Oye');
			selbox.options[selbox.options.length] = new
			Option('Ikole','Ikole');
			selbox.options[selbox.options.length] = new
			Option('Moba','Moba');
			selbox.options[selbox.options.length] = new
			Option('Gbonyin','Gbonyin');
			selbox.options[selbox.options.length] = new
			Option('Efon','Efon');
			selbox.options[selbox.options.length] = new
			Option('Ise/Orun','Ise/Orun');
			selbox.options[selbox.options.length] = new
			Option('Ilejemeje','Ilejemeje');
	}
	if (chosen == "Enugu") {
			selbox.options[selbox.options.length] = new
			Option('','');
			selbox.options[selbox.options.length] = new
			Option('Enugu South','Enugu South');
			selbox.options[selbox.options.length] = new
			Option('Igbo-Eze South','Igbo-Eze South');
			selbox.options[selbox.options.length] = new
			Option('Enugu North','Enugu North');
			selbox.options[selbox.options.length] = new
			Option('Nkanu','Nkanu');
			selbox.options[selbox.options.length] = new
			Option('Udi Agwu','Udi Agwu');
			selbox.options[selbox.options.length] = new
			Option('Oji-River','Oji-River');
			selbox.options[selbox.options.length] = new
			Option('Ezeagu','Ezeagu');
			selbox.options[selbox.options.length] = new
			Option('IgboEze North','IgboEze North');
			selbox.options[selbox.options.length] = new
			Option('Isi-Uzo','Isi-Uzo');
			selbox.options[selbox.options.length] = new
			Option('Nsukka','Nsukka');
			selbox.options[selbox.options.length] = new
			Option('Igbo-Ekiti','Igbo-Ekiti');
			selbox.options[selbox.options.length] = new
			Option('Uzo-Uwani','Uzo-Uwani');
			selbox.options[selbox.options.length] = new
			Option('Enugu Eas','Enugu Eas');
			selbox.options[selbox.options.length] = new
			Option('Aninri','Aninri');
			selbox.options[selbox.options.length] = new
			Option('Nkanu East','Nkanu East');
			selbox.options[selbox.options.length] = new
			Option('Udenu','Udenu');
	}
	if (chosen == "Gombe") {
			selbox.options[selbox.options.length] = new
			Option('','');
			selbox.options[selbox.options.length] = new
			Option('Akko','Akko');
			selbox.options[selbox.options.length] = new
			Option('Balanga','Balanga');
			selbox.options[selbox.options.length] = new
			Option('Billiri','Billiri');
			selbox.options[selbox.options.length] = new
			Option('Dukku','Dukku');
			selbox.options[selbox.options.length] = new
			Option('Kaltungo','Kaltungo');
			selbox.options[selbox.options.length] = new
			Option('Kwami','Kwami');
			selbox.options[selbox.options.length] = new
			Option('Shomgom','Shomgom');
			selbox.options[selbox.options.length] = new
			Option('Funakaye','Funakaye');
			selbox.options[selbox.options.length] = new
			Option('Gombe','Gombe');
			selbox.options[selbox.options.length] = new
			Option('Nafada/Bajoga','Nafada/Bajoga');
			selbox.options[selbox.options.length] = new
			Option('Yamaltu/Deba','Yamaltu/Deba');
	}
	if (chosen == "Imo") {
			selbox.options[selbox.options.length] = new
			Option('','');
			selbox.options[selbox.options.length] = new
			Option('Aboh-Mbaise','Aboh-Mbaise');
			selbox.options[selbox.options.length] = new
			Option('Ahiazu-Mbaise','Ahiazu-Mbaise');
			selbox.options[selbox.options.length] = new
			Option('Ehime-Mbano','Ehime-Mbano');
			selbox.options[selbox.options.length] = new
			Option('Ezinihitte','Ezinihitte');
			selbox.options[selbox.options.length] = new
			Option('Ideato North','Ideato North');
			selbox.options[selbox.options.length] = new
			Option('Ideato South','Ideato South');
			selbox.options[selbox.options.length] = new
			Option('Ihitte/Uboma','Ihitte/Uboma');
			selbox.options[selbox.options.length] = new
			Option('Ikeduru','Ikeduru');
			selbox.options[selbox.options.length] = new
			Option('Isiala Mbano','Isiala Mbano');
			selbox.options[selbox.options.length] = new
			Option('Isu','Isu');
			selbox.options[selbox.options.length] = new
			Option('Mbaitoli','Mbaitoli');
			selbox.options[selbox.options.length] = new
			Option('Mbaitoli','Mbaitoli');
			selbox.options[selbox.options.length] = new
			Option('Ngor-Okpala','Ngor-Okpala');
			selbox.options[selbox.options.length] = new
			Option('Njaba','Njaba');
			selbox.options[selbox.options.length] = new
			Option('Nwangele','Nwangele');
			selbox.options[selbox.options.length] = new
			Option('Nkwerre','Nkwerre');
			selbox.options[selbox.options.length] = new
			Option('Obowo','Obowo');
			selbox.options[selbox.options.length] = new
			Option('Oguta','Oguta');
			selbox.options[selbox.options.length] = new
			Option('Ohaji/Egbema','Ohaji/Egbema');
			selbox.options[selbox.options.length] = new
			Option('Okigwe','Okigwe');
			selbox.options[selbox.options.length] = new
			Option('Orlu','Orlu');
			selbox.options[selbox.options.length] = new
			Option('Orsu','Orsu');
			selbox.options[selbox.options.length] = new
			Option('Oru East','Oru East');
			selbox.options[selbox.options.length] = new
			Option('Oru West','Oru West');
			selbox.options[selbox.options.length] = new
			Option('Owerri-Municipal','Owerri-Municipal');
			selbox.options[selbox.options.length] = new
			Option('Owerri North','Owerri North');
			selbox.options[selbox.options.length] = new
			Option('Owerri West','Owerri West');
	}
	if (chosen == "Jigawa") {
			selbox.options[selbox.options.length] = new
			Option('','');
			selbox.options[selbox.options.length] = new
			Option('Auyo','Auyo');
			selbox.options[selbox.options.length] = new
			Option('Babura','Babura');
			selbox.options[selbox.options.length] = new
			Option('Birni Kudu','Birni Kudu');
			selbox.options[selbox.options.length] = new
			Option('Biriniwa','Biriniwa');
			selbox.options[selbox.options.length] = new
			Option('Buji','Buji');
			selbox.options[selbox.options.length] = new
			Option('Dutse','Dutse');
			selbox.options[selbox.options.length] = new
			Option('Gagarawa','Gagarawa');
			selbox.options[selbox.options.length] = new
			Option('Garki','Garki');
			selbox.options[selbox.options.length] = new
			Option('Gumel','Gumel');
			selbox.options[selbox.options.length] = new
			Option('Guri','Guri');
			selbox.options[selbox.options.length] = new
			Option('Gwaram','Gwaram');
			selbox.options[selbox.options.length] = new
			Option('Gwiwa','Gwiwa');
			selbox.options[selbox.options.length] = new
			Option('Hadejia','Hadejia');
			selbox.options[selbox.options.length] = new
			Option('Jahun','Jahun');
			selbox.options[selbox.options.length] = new
			Option('Kafin Hausa','Kafin Hausa');
			selbox.options[selbox.options.length] = new
			Option('Kaugama Kazaure','Kaugama Kazaure');
			selbox.options[selbox.options.length] = new
			Option('Kiri Kasamma','Kiri Kasamma');
			selbox.options[selbox.options.length] = new
			Option('Kiyawa','Kiyawa');
			selbox.options[selbox.options.length] = new
			Option('Maigatari','Maigatari');
			selbox.options[selbox.options.length] = new
			Option('Malam Madori','Malam Madori');
			selbox.options[selbox.options.length] = new
			Option('Miga','Miga');
			selbox.options[selbox.options.length] = new
			Option('Ringim','Ringim');
			selbox.options[selbox.options.length] = new
			Option('Roni','Roni');
			selbox.options[selbox.options.length] = new
			Option('Sule-Tankarkar','Sule-Tankarkar');
			selbox.options[selbox.options.length] = new
			Option('Taura','Taura');
			selbox.options[selbox.options.length] = new
			Option('Yankwashi','Yankwashi');
	}
	if (chosen == "Kano") {
			selbox.options[selbox.options.length] = new
			Option('','');
			selbox.options[selbox.options.length] = new
			Option('Ajingi','Ajingi');
			selbox.options[selbox.options.length] = new
			Option('Albasu','Albasu');
			selbox.options[selbox.options.length] = new
			Option('Bagwai','Bagwai');
			selbox.options[selbox.options.length] = new
			Option('Bebeji','Bebeji');
			selbox.options[selbox.options.length] = new
			Option('Bichi','Bichi');
			selbox.options[selbox.options.length] = new
			Option('Bunkure','Bunkure');
			selbox.options[selbox.options.length] = new
			Option('Dala','Dala');
			selbox.options[selbox.options.length] = new
			Option('Dambatta','Dambatta');
			selbox.options[selbox.options.length] = new
			Option('Dawakin Kudu','Dawakin Kudu');
			selbox.options[selbox.options.length] = new
			Option('Dawakin Tofa','Dawakin Tofa');
			selbox.options[selbox.options.length] = new
			Option('Doguwa','Doguwa');
			selbox.options[selbox.options.length] = new
			Option('Fagge','Fagge');
			selbox.options[selbox.options.length] = new
			Option('Gabasawa','Gabasawa');
			selbox.options[selbox.options.length] = new
			Option('Garko','Garko');
			selbox.options[selbox.options.length] = new
			Option('Garum','Garum');
			selbox.options[selbox.options.length] = new
			Option('Mallam','Mallam');
			selbox.options[selbox.options.length] = new
			Option('Gaya','Gaya');
			selbox.options[selbox.options.length] = new
			Option('Gezawa','Gezawa');
			selbox.options[selbox.options.length] = new
			Option('Gwale','Gwale');
			selbox.options[selbox.options.length] = new
			Option('Gwarzo','Gwarzo');
			selbox.options[selbox.options.length] = new
			Option('Kabo','Kabo');
			selbox.options[selbox.options.length] = new
			Option('Kano Municipal','Kano Municipal');
			selbox.options[selbox.options.length] = new
			Option('Karaye','Karaye');
			selbox.options[selbox.options.length] = new
			Option('Kibiya','Kibiya');
			selbox.options[selbox.options.length] = new
			Option('Kiru','Kiru');
			selbox.options[selbox.options.length] = new
			Option('kumbotso','kumbotso');
			selbox.options[selbox.options.length] = new
			Option('Kunchi','Kunchi');
			selbox.options[selbox.options.length] = new
			Option('Kura','Kura');
			selbox.options[selbox.options.length] = new
			Option('Madobi','Madobi');
			selbox.options[selbox.options.length] = new
			Option('Makoda','Makoda');
			selbox.options[selbox.options.length] = new
			Option('Minjibir','Minjibir');
			selbox.options[selbox.options.length] = new
			Option('Nasarawa','Nasarawa');
			selbox.options[selbox.options.length] = new
			Option('Rano','Rano');
			selbox.options[selbox.options.length] = new
			Option('Rimin Gado','Rimin Gado');
			selbox.options[selbox.options.length] = new
			Option('Rogo','Rogo');
			selbox.options[selbox.options.length] = new
			Option('Shanono','Shanono');
			selbox.options[selbox.options.length] = new
			Option('Sumaila','Sumaila');
			selbox.options[selbox.options.length] = new
			Option('Takali','Takali');
			selbox.options[selbox.options.length] = new
			Option('Tarauni','Tarauni');
			selbox.options[selbox.options.length] = new
			Option('Tofa','Tofa');
			selbox.options[selbox.options.length] = new
			Option('Tsanyawa','Tsanyawa');
			selbox.options[selbox.options.length] = new
			Option('Tudun Wada','Tudun Wada');
			selbox.options[selbox.options.length] = new
			Option('Ungogo','Ungogo');
			selbox.options[selbox.options.length] = new
			Option('Warawa','Warawa');
			selbox.options[selbox.options.length] = new
			Option('Wudil','Wudil');
	}
	if (chosen == "Kaduna") {
			selbox.options[selbox.options.length] = new
			Option('','');
			selbox.options[selbox.options.length] = new
			Option('Birni-Gwari','Birni-Gwari');
			selbox.options[selbox.options.length] = new
			Option('Chikun','Chikun');
			selbox.options[selbox.options.length] = new
			Option('Giwa','Giwa');
			selbox.options[selbox.options.length] = new
			Option('Igabi','Igabi');
			selbox.options[selbox.options.length] = new
			Option('Ikara','Ikara');
			selbox.options[selbox.options.length] = new
			Option('jaba','jaba');
			selbox.options[selbox.options.length] = new
			Option('Jema a','Jema a');
			selbox.options[selbox.options.length] = new
			Option('Kachia','Kachia');
			selbox.options[selbox.options.length] = new
			Option('Kaduna North','Kaduna North');
			selbox.options[selbox.options.length] = new
			Option('Kaduna South','Kaduna South');
			selbox.options[selbox.options.length] = new
			Option('Kagarko','Kagarko');
			selbox.options[selbox.options.length] = new
			Option('Kajuru','Kajuru');
			selbox.options[selbox.options.length] = new
			Option('Kaura','Kaura');
			selbox.options[selbox.options.length] = new
			Option('Kauru','Kauru');
			selbox.options[selbox.options.length] = new
			Option('Kubau','Kubau');
			selbox.options[selbox.options.length] = new
			Option('Kudan','Kudan');
			selbox.options[selbox.options.length] = new
			Option('Lere','Lere');
			selbox.options[selbox.options.length] = new
			Option('Makarfi','Makarfi');
			selbox.options[selbox.options.length] = new
			Option('Sabon-Gari','Sabon-Gari');
			selbox.options[selbox.options.length] = new
			Option('Sanga','Sanga');
			selbox.options[selbox.options.length] = new
			Option('Soba','Soba');
			selbox.options[selbox.options.length] = new
			Option('Zango-Kataf','Zango-Kataf');
			selbox.options[selbox.options.length] = new
			Option('Zaria','Zaria');
	}
	if (chosen == "Katsina") {
			selbox.options[selbox.options.length] = new
			Option('','');
			selbox.options[selbox.options.length] = new
			Option('Bakori','Bakori');
			selbox.options[selbox.options.length] = new
			Option('Batagarawa','Batagarawa');
			selbox.options[selbox.options.length] = new
			Option('Batsari','Batsari');
			selbox.options[selbox.options.length] = new
			Option('Baure','Baure');
			selbox.options[selbox.options.length] = new
			Option('Bindawa','Bindawa');
			selbox.options[selbox.options.length] = new
			Option('Charanchi','Charanchi');
			selbox.options[selbox.options.length] = new
			Option('Dandume','Dandume');
			selbox.options[selbox.options.length] = new
			Option('Danja','Danja');
			selbox.options[selbox.options.length] = new
			Option('Dan Musa','Dan Musa');
			selbox.options[selbox.options.length] = new
			Option('Daura','Daura');
			selbox.options[selbox.options.length] = new
			Option('Dutsi','Dutsi');
			selbox.options[selbox.options.length] = new
			Option('Dutsin-Ma','Dutsin-Ma');
			selbox.options[selbox.options.length] = new
			Option('Faskari','Faskari');
			selbox.options[selbox.options.length] = new
			Option('Funtua','Funtua');
			selbox.options[selbox.options.length] = new
			Option('Ingawa','Ingawa');
			selbox.options[selbox.options.length] = new
			Option('Jibia','Jibia');
			selbox.options[selbox.options.length] = new
			Option('Kafur','Kafur ');
			selbox.options[selbox.options.length] = new
			Option('Kaita','Kaita ');
			selbox.options[selbox.options.length] = new
			Option('Kankara','Kankara');
			selbox.options[selbox.options.length] = new
			Option('Kankia','Kankia');
			selbox.options[selbox.options.length] = new
			Option('Katsina','Katsina');
			selbox.options[selbox.options.length] = new
			Option('Kurfi','Kurfi');
			selbox.options[selbox.options.length] = new
			Option('Kusada','Kusada');
			selbox.options[selbox.options.length] = new
			Option('Mai Adua','Mai Adua');
			selbox.options[selbox.options.length] = new
			Option('Malumfashi','Malumfashi');
			selbox.options[selbox.options.length] = new
			Option('Mani','Mani');
			selbox.options[selbox.options.length] = new
			Option('Mashi','Mashi');
			selbox.options[selbox.options.length] = new
			Option('Matazuu','Matazuu');
			selbox.options[selbox.options.length] = new
			Option('Musawa','Musawa');
			selbox.options[selbox.options.length] = new
			Option('Rimi','Rimi ');
			selbox.options[selbox.options.length] = new
			Option('Sabuwa','Sabuwa');
			selbox.options[selbox.options.length] = new
			Option('Safana','Safana');
			selbox.options[selbox.options.length] = new
			Option('Sandamu','Sandamu');
			selbox.options[selbox.options.length] = new
			Option('Zango','Zango');
	}
	if (chosen == "Kebbi") {
			selbox.options[selbox.options.length] = new
			Option('','');
			selbox.options[selbox.options.length] = new
			Option('Aleiro','Aleiro');
			selbox.options[selbox.options.length] = new
			Option('Arewa-Dandi','Arewa-Dandi');
			selbox.options[selbox.options.length] = new 
			Option('Argungu','Argungu');
			selbox.options[selbox.options.length] = new 
			Option('Augie','Augie');
			selbox.options[selbox.options.length] = new 
			Option('Bagudo','Bagudo');
			selbox.options[selbox.options.length] = new 
			Option('Birnin Kebbi','Birnin Kebbi');
			selbox.options[selbox.options.length] = new 
			Option('Bunza','Bunza');
			selbox.options[selbox.options.length] = new 
			Option('Dandi','Dandi');
			selbox.options[selbox.options.length] = new  
			Option('Fakai','Fakai');
			selbox.options[selbox.options.length] = new 
			Option('Gwandu','Gwandu');
			selbox.options[selbox.options.length] = new 
			Option('Jega','Jega');
			selbox.options[selbox.options.length] = new 
			Option('Kalgo','Kalgo');
			selbox.options[selbox.options.length] = new  
			Option('Koko/Besse','Koko/Besse');
			selbox.options[selbox.options.length] = new 
			Option('Maiyama','Maiyama');
			selbox.options[selbox.options.length] = new 
			Option('Ngaski','Ngaski');
			selbox.options[selbox.options.length] = new 
			Option('Sakaba','Sakaba');
			selbox.options[selbox.options.length] = new 
			Option('Shanga','Shanga');
			selbox.options[selbox.options.length] = new 
			Option('Suru','Suru');
			selbox.options[selbox.options.length] = new 
			Option('Wasagu/Danko','Wasagu/Danko');
			selbox.options[selbox.options.length] = new 
			Option('Yauri','Yauri');
			selbox.options[selbox.options.length] = new 
			Option('Zuru','Zuru');
	}
	if (chosen == "Kogi") {
			selbox.options[selbox.options.length] = new
			Option('','');
			selbox.options[selbox.options.length] = new
			Option('Adavi','Adavi');
			selbox.options[selbox.options.length] = new  
			Option('Ajaokuta','Ajaokuta');
			selbox.options[selbox.options.length] = new  
			Option('Ankpa','Ankpa');
			selbox.options[selbox.options.length] = new  
			Option('Bassa','Bassa');
			selbox.options[selbox.options.length] = new  
			Option('Dekina','Dekina');
			selbox.options[selbox.options.length] = new  
			Option('Ibaji','Ibaji');
			selbox.options[selbox.options.length] = new  
			Option('Idah','Idah');
			selbox.options[selbox.options.length] = new  
			Option('Igalamela-Odolu','Igalamela-Odolu');
			selbox.options[selbox.options.length] = new  
			Option('Ijumu','Ijumu');
			selbox.options[selbox.options.length] = new  
			Option('Kabba/Bunu','Kabba/Bunu');
			selbox.options[selbox.options.length] = new  
			Option('Kogi','Kogi');
			selbox.options[selbox.options.length] = new  
			Option('Lokoja','Lokoja');
			selbox.options[selbox.options.length] = new  
			Option('Mopa-Muro','Mopa-Muro');
			selbox.options[selbox.options.length] = new  
			Option('Ofu','Ofu');
			selbox.options[selbox.options.length] = new  
			Option('Ogori/Mangongo','Ogori/Mangongo');
			selbox.options[selbox.options.length] = new  
			Option('Okehi','Okehi');
			selbox.options[selbox.options.length] = new  
			Option('Okene','Okene');
			selbox.options[selbox.options.length] = new  
			Option('Olamabolo','Olamabolo');
			selbox.options[selbox.options.length] = new  
			Option('Omala','Omala');
			selbox.options[selbox.options.length] = new  
			Option('Yagba East','Yagba East');
			selbox.options[selbox.options.length] = new   
			Option('Yagba West','Yagba West');
	}
	if (chosen == "Kwara") {
			selbox.options[selbox.options.length] = new
			Option('','');
			selbox.options[selbox.options.length] = new
			Option('Asa','Asa');
			selbox.options[selbox.options.length] = new  
			Option('Baruten','Baruten');
			selbox.options[selbox.options.length] = new  
			Option('Edu','Edu');
			selbox.options[selbox.options.length] = new  
			Option('Ekiti','Ekiti');
			selbox.options[selbox.options.length] = new  
			Option('Ifelodun','Ifelodun');
			selbox.options[selbox.options.length] = new  
			Option('Ilorin East','Ilorin East');
			selbox.options[selbox.options.length] = new  
			Option('Ilorin West','Ilorin West');
			selbox.options[selbox.options.length] = new  
			Option('Irepodun','Irepodun');
			selbox.options[selbox.options.length] = new  
			Option('Isin','Isin');
			selbox.options[selbox.options.length] = new  
			Option('Kaiama','Kaiama');
			selbox.options[selbox.options.length] = new  
			Option('Moro','Moro');
			selbox.options[selbox.options.length] = new 
			Option('Offa','Offa');
			selbox.options[selbox.options.length] = new  
			Option('Oke-Ero','Oke-Ero');
			selbox.options[selbox.options.length] = new  
			Option('Oyun','Oyun');
			selbox.options[selbox.options.length] = new 
			Option('Pategi','Pategi');
	}
	if (chosen == "Lagos") {
			selbox.options[selbox.options.length] = new
			Option('','');
			selbox.options[selbox.options.length] = new
			Option('Agege','Agege');
			selbox.options[selbox.options.length] = new 
			Option('Ajeromi-Ifelodun','Ajeromi-Ifelodun');
			selbox.options[selbox.options.length] = new 
			Option('Alimosho','Alimosho');
			selbox.options[selbox.options.length] = new 
			Option('Amuwo-Odofin','Amuwo-Odofin');
			selbox.options[selbox.options.length] = new 
			Option('Apapa','Apapa');
			selbox.options[selbox.options.length] = new 
			Option('Badagry','Badagry');
			selbox.options[selbox.options.length] = new 
			Option('Epe','Epe');
			selbox.options[selbox.options.length] = new 
			Option('Eti-Osa','Eti-Osa');
			selbox.options[selbox.options.length] = new 
			Option('Ibeju/Lekki','Ibeju/Lekki');
			selbox.options[selbox.options.length] = new 
			Option('Ifako-Ijaye','Ifako-Ijaye');
			selbox.options[selbox.options.length] = new  
			Option('Ikeja','Ikeja');
			selbox.options[selbox.options.length] = new 
			Option('Ikorodu','Ikorodu');
			selbox.options[selbox.options.length] = new 
			Option('Kosofe','Kosofe');
			selbox.options[selbox.options.length] = new 
			Option('Lagos Island','Lagos Island');
			selbox.options[selbox.options.length] = new 
			Option('Lagos Mainland','Lagos Mainland');
			selbox.options[selbox.options.length] = new 
			Option('Mushin','Mushin');
			selbox.options[selbox.options.length] = new 
			Option('Ojo','Ojo');
			selbox.options[selbox.options.length] = new
			Option('Oshodi-Isolo','Oshodi-Isolo');
			selbox.options[selbox.options.length] = new 
			Option('Shomolu','Shomolu');
			selbox.options[selbox.options.length] = new 
			Option('Surulere','Surulere');
	}
	if (chosen == "Nasarawa") {
			selbox.options[selbox.options.length] = new
			Option('','');
			selbox.options[selbox.options.length] = new
			Option('Akwanga','Akwanga');
			selbox.options[selbox.options.length] = new  
			Option('Awe','Awe');
			selbox.options[selbox.options.length] = new  
			Option('Doma','Doma');
			selbox.options[selbox.options.length] = new  
			Option('Karu','Karu');
			selbox.options[selbox.options.length] = new  
			Option('Keana','Keana');
			selbox.options[selbox.options.length] = new  
			Option('Keffi','Keffi');
			selbox.options[selbox.options.length] = new  
			Option('Kokona','Kokona');
			selbox.options[selbox.options.length] = new  
			Option('Lafia','Lafia');
			selbox.options[selbox.options.length] = new  
			Option('Nasarawa','Nasarawa');
			selbox.options[selbox.options.length] = new  
			Option('Nasarawa-Eggon','Nasarawa-Eggon');
			selbox.options[selbox.options.length] = new  
			Option('Obi','Obi');
			selbox.options[selbox.options.length] = new  
			Option('Toto','Toto');
			selbox.options[selbox.options.length] = new  
			Option('Wamba','Wamba');
	}
	if (chosen == "Niger") {
			selbox.options[selbox.options.length] = new
			Option('','');
			selbox.options[selbox.options.length] = new
			Option('Agaie','Agaie');
			selbox.options[selbox.options.length] = new 
			Option('Agwara','Agwara');
			selbox.options[selbox.options.length] = new  
			Option('Bida','Bida');
			selbox.options[selbox.options.length] = new  
			Option('Borgu','Borgu');
			selbox.options[selbox.options.length] = new  
			Option('Bosso','Bosso');
			selbox.options[selbox.options.length] = new  
			Option('Chanchaga','Chanchaga');
			selbox.options[selbox.options.length] = new  
			Option('Edati','Edati');
			selbox.options[selbox.options.length] = new  
			Option('Gbako','Gbako');
			selbox.options[selbox.options.length] = new  
			Option('Gurara','Gurara');
			selbox.options[selbox.options.length] = new  
			Option('Katcha','Katcha');
			selbox.options[selbox.options.length] = new  
			Option('Kontagora','Kontagora');
			selbox.options[selbox.options.length] = new   
			Option('Lapai','Lapai');
			selbox.options[selbox.options.length] = new  
			Option('Lavun','Lavun');
			selbox.options[selbox.options.length] = new  
			Option('Magama','Magama');
			selbox.options[selbox.options.length] = new  
			Option('Mariga','Mariga');
			selbox.options[selbox.options.length] = new  
			Option('Mashegu','Mashegu');
			selbox.options[selbox.options.length] = new  
			Option('Mokwa','Mokwa');
			selbox.options[selbox.options.length] = new  
			Option('Muya','Muya');
			selbox.options[selbox.options.length] = new  
			Option('Pailoro','Pailoro');
			selbox.options[selbox.options.length] = new  
			Option('Rafi','Rafi');
			selbox.options[selbox.options.length] = new  
			Option('Rijau','Rijau');
			selbox.options[selbox.options.length] = new  
			Option('Shiroro','Shiroro');
			selbox.options[selbox.options.length] = new  
			Option('Suleja','Suleja');
			selbox.options[selbox.options.length] = new  
			Option('Tafa','Tafa');
			selbox.options[selbox.options.length] = new  
			Option('Wushishi','Wushishi');
	}
	if (chosen == "Ogun") {
			selbox.options[selbox.options.length] = new
			Option('','');
			selbox.options[selbox.options.length] = new
			Option('Abeokuta North','Abeokuta North');
			selbox.options[selbox.options.length] = new 
			Option('Abeokuta South','Abeokuta South');
			selbox.options[selbox.options.length] = new
			Option('Ado-Odo/Ota','Ado-Odo/Ota');
			selbox.options[selbox.options.length] = new 
			Option('Egbado North','Egbado North');
			selbox.options[selbox.options.length] = new
			Option('Egbado South','Egbado South');
			selbox.options[selbox.options.length] = new
			Option('Ewekoro','Ewekoro');
			selbox.options[selbox.options.length] = new
			Option('Ifo','Ifo');
			selbox.options[selbox.options.length] = new
			Option('Ijebu East','Ijebu East');
			selbox.options[selbox.options.length] = new
			Option('Ijebu North','Ijebu North');
			selbox.options[selbox.options.length] = new
			Option('Ijebu North East','Ijebu North East');
			selbox.options[selbox.options.length] = new
			Option('Ijebu Ode','Ijebu Ode');
			selbox.options[selbox.options.length] = new
			Option('Ikenne','Ikenne');
			selbox.options[selbox.options.length] = new
			Option('Imeko-Afon','Imeko-Afon');
			selbox.options[selbox.options.length] = new
			Option('Ipokia','Ipokia');
			selbox.options[selbox.options.length] = new
			Option('Obafemi-Owode','Obafemi-Owode');
			selbox.options[selbox.options.length] = new
			Option('Ogun Waterside','Ogun Waterside');
			selbox.options[selbox.options.length] = new
			Option('Odeda','Odeda');
			selbox.options[selbox.options.length] = new
			Option('Odogbolu','Odogbolu');
			selbox.options[selbox.options.length] = new
			Option('Remo North','Remo North');
			selbox.options[selbox.options.length] = new
			Option('Shagamu','Shagamu');
	}
	if (chosen == "Ondo") {
			selbox.options[selbox.options.length] = new
			Option('','');
			selbox.options[selbox.options.length] = new
			Option('Akoko North East','Akoko North East');
			selbox.options[selbox.options.length] = new
			Option('Akoko North West','Akoko North West');
			selbox.options[selbox.options.length] = new
			Option('Akoko South Akure East','Akoko South Akure East');
			selbox.options[selbox.options.length] = new
			Option('Akoko South West','Akoko South West');
			selbox.options[selbox.options.length] = new
			Option('Akure North','Akure North');
			selbox.options[selbox.options.length] = new
			Option('Akure South','Akure South');
			selbox.options[selbox.options.length] = new
			Option('Ese-Odo','Ese-Odo');
			selbox.options[selbox.options.length] = new
			Option('Idanre','Idanre');
			selbox.options[selbox.options.length] = new
			Option('Ifedore','Ifedore');
			selbox.options[selbox.options.length] = new
			Option('Ilaje','Ilaje');
			selbox.options[selbox.options.length] = new
			Option('Ile-Oluji','Ile-Oluji');
			selbox.options[selbox.options.length] = new
			Option('Okeigbo','Okeigbo');
			selbox.options[selbox.options.length] = new
			Option('Irele','Irele');
			selbox.options[selbox.options.length] = new
			Option('Odigbo','Odigbo');
			selbox.options[selbox.options.length] = new
			Option('Okitipupa','Okitipupa');
			selbox.options[selbox.options.length] = new
			Option('Ondo East','Ondo East');
			selbox.options[selbox.options.length] = new
			Option('Ondo West','Ondo West');
			selbox.options[selbox.options.length] = new
			Option('Ose','Ose');
			selbox.options[selbox.options.length] = new
			Option('Owo','Owo');
	}
	if (chosen == "Osun") {
			selbox.options[selbox.options.length] = new
			Option('','');
			selbox.options[selbox.options.length]=new
			Option('Aiyedade','Aiyedade');
			selbox.options[selbox.options.length]=new
			Option('Aiyedire','Aiyedire');
			selbox.options[selbox.options.length]=new
			Option('Atakumosa East','Atakumosa East');
			selbox.options[selbox.options.length]=new
			Option('Atakumosa West','Atakumosa West');
			selbox.options[selbox.options.length]=new
			Option('Boluwaduro','Boluwaduro');
			selbox.options[selbox.options.length]=new
			Option('Boripe','Boripe');
			selbox.options[selbox.options.length]=new
			Option('Ede North','Ede North');
			selbox.options[selbox.options.length]=new
			Option('Ede South','Ede South');
			selbox.options[selbox.options.length]=new
			Option('Egbedore','Egbedore');
			selbox.options[selbox.options.length]=new
			Option('Ejigbo','Ejigbo');
			selbox.options[selbox.options.length]=new
			Option('Ife Central','Ife Central');
			selbox.options[selbox.options.length]=new
			Option('Ife East','Ife East');
			selbox.options[selbox.options.length]=new
			Option('Ife North','Ife North');
			selbox.options[selbox.options.length]=new
			Option('Ife South','Ife South');
			selbox.options[selbox.options.length]=new
			Option('Ifedayo','Ifedayo');
			selbox.options[selbox.options.length]=new
			Option('Ifelodun','Ifelodun');
			selbox.options[selbox.options.length]=new
			Option('Ila','Ila');
			selbox.options[selbox.options.length]=new
			Option('Ilesha East','Ilesha East');
			selbox.options[selbox.options.length]=new
			Option('Ilesha West','Ilesha West');
			selbox.options[selbox.options.length]=new
			Option('Irepodun','Irepodun');
			selbox.options[selbox.options.length]=new
			Option('Irewole','Irewole');
			selbox.options[selbox.options.length]=new
			Option('Isokan','Isokan');
			selbox.options[selbox.options.length]=new
			Option('Iwo','Iwo');
			selbox.options[selbox.options.length]=new
			Option('Obokun','Obokun');
			selbox.options[selbox.options.length]=new
			Option('Odo-Otin','Odo-Otin');
			selbox.options[selbox.options.length]=new
			Option('Ola-Oluwa','Ola-Oluwa');
			selbox.options[selbox.options.length]=new
			Option('Olorunda','Olorunda');
			selbox.options[selbox.options.length]=new
			Option('Oriade','Oriade');
			selbox.options[selbox.options.length]=new
			Option('Orolu','Orolu');
			selbox.options[selbox.options.length]=new
			Option('Osogbo','Osogbo');
	}
	if (chosen == "Oyo") {
			selbox.options[selbox.options.length] = new
			Option('','');
			selbox.options[selbox.options.length]=new
			Option('Afijio','Afijio');
			selbox.options[selbox.options.length]=new
			Option('Akinyele','Akinyele');
			selbox.options[selbox.options.length]=new
			Option('Atiba','Atiba');
			selbox.options[selbox.options.length]=new
			Option('Atigbo','Atigbo');
			selbox.options[selbox.options.length]=new
			Option('Egbeda','Egbeda');
			selbox.options[selbox.options.length]=new
			Option('IbadanCentral','IbadanCentral');
			selbox.options[selbox.options.length]=new
			Option('Ibadan North','Ibadan North');
			selbox.options[selbox.options.length]=new
			Option('Ibadan North West','Ibadan North West');
			selbox.options[selbox.options.length]=new
			Option('Ibadan South East','Ibadan South East');
			selbox.options[selbox.options.length]=new
			Option('Ibadan South West','Ibadan South West');
			selbox.options[selbox.options.length]=new
			Option('Ibarapa Central','Ibarapa Central');
			selbox.options[selbox.options.length]=new
			Option('Ibarapa East','Ibarapa East');
			selbox.options[selbox.options.length]=new
			Option('Ibarapa North','Ibarapa North');
			selbox.options[selbox.options.length]=new
			Option('Ido','Ido');
			selbox.options[selbox.options.length]=new
			Option('Irepo','Irepo');
			selbox.options[selbox.options.length]=new
			Option('Iseyin','Iseyin');
			selbox.options[selbox.options.length]=new
			Option('Itesiwaju','Itesiwaju');
			selbox.options[selbox.options.length]=new
			Option('Iwajowa','Iwajowa');
			selbox.options[selbox.options.length]=new
			Option('Kajola','Kajola');
			selbox.options[selbox.options.length]=new
			Option('Lagelu Ogbomosho North','Lagelu Ogbomosho North');
			selbox.options[selbox.options.length]=new
			Option('Ogbmosho South','Ogbmosho South');
			selbox.options[selbox.options.length]=new
			Option('Ogo Oluwa','Ogo Oluwa');
			selbox.options[selbox.options.length]=new
			Option('Olorunsogo','Olorunsogo');
			selbox.options[selbox.options.length]=new
			Option('Oluyole','Oluyole');
			selbox.options[selbox.options.length]=new
			Option('Ona-Ara','Ona-Ara');
			selbox.options[selbox.options.length]=new
			Option('Orelope','Orelope');
			selbox.options[selbox.options.length]=new
			Option('Ori Ire','Ori Ire');
			selbox.options[selbox.options.length]=new
			Option('Oyo East','Oyo East');
			selbox.options[selbox.options.length]=new
			Option('Oyo West','Oyo West');
			selbox.options[selbox.options.length]=new
			Option('Saki East','Saki East');
			selbox.options[selbox.options.length]=new
			Option('Saki West','Saki West');
			selbox.options[selbox.options.length]=new
			Option('Surulere','Surulere');
	}
	if (chosen == "Plateau") {
			selbox.options[selbox.options.length] = new
			Option('','');
			selbox.options[selbox.options.length]=new
			Option('Barikin Ladi','Barikin Ladi');
			selbox.options[selbox.options.length]=new
			Option('Bassa','Bassa');
			selbox.options[selbox.options.length]=new
			Option('Bokkos','Bokkos');
			selbox.options[selbox.options.length]=new
			Option('Jos East','Jos East');
			selbox.options[selbox.options.length]=new
			Option('Jos North','Jos North');
			selbox.options[selbox.options.length]=new
			Option('Jos South','Jos South');
			selbox.options[selbox.options.length]=new
			Option('Kanam','Kanam');
			selbox.options[selbox.options.length]=new
			Option('Kanke','Kanke');
			selbox.options[selbox.options.length]=new
			Option('Langtang North','Langtang North');
			selbox.options[selbox.options.length]=new
			Option('Langtang South','Langtang South');
			selbox.options[selbox.options.length]=new
			Option('Mangu','Mangu');
			selbox.options[selbox.options.length]=new
			Option('Mikang','Mikang');
			selbox.options[selbox.options.length]=new
			Option('Pankshin','Pankshin');
			selbox.options[selbox.options.length]=new
			Option('Qua an Pan','Qua an Pan');
			selbox.options[selbox.options.length]=new
			Option('Riyom','Riyom');
			selbox.options[selbox.options.length]=new
			Option('Shendam','Shendam');
			selbox.options[selbox.options.length]=new
			Option('Wase','Wase');
	}
	if (chosen == "Rivers") {
			selbox.options[selbox.options.length] = new
			Option('','');
			selbox.options[selbox.options.length]=new
			Option('Abua/Odual','Abua/Odual');
			selbox.options[selbox.options.length]=new
			Option('Ahoada East','Ahoada East');
			selbox.options[selbox.options.length]=new
			Option('Ahoada West','Ahoada West');
			selbox.options[selbox.options.length]=new
			Option('Akuku Toru','Akuku Toru');
			selbox.options[selbox.options.length]=new
			Option('Andoni','Andoni');
			selbox.options[selbox.options.length]=new
			Option('Asari-Toru','Asari-Toru');
			selbox.options[selbox.options.length]=new
			Option('Bonny','Bonny');
			selbox.options[selbox.options.length]=new
			Option('Degema','Degema');
			selbox.options[selbox.options.length]=new
			Option('Emohua','Emohua');
			selbox.options[selbox.options.length]=new
			Option('Eleme','Eleme');
			selbox.options[selbox.options.length]=new
			Option('Etche','Etche');
			selbox.options[selbox.options.length]=new
			Option('Gokana','Gokana');
			selbox.options[selbox.options.length]=new
			Option('Ikwerre','Ikwerre');
			selbox.options[selbox.options.length]=new
			Option('Khana','Khana');
			selbox.options[selbox.options.length]=new
			Option('Obia/Akpor','Obia/Akpor');
			selbox.options[selbox.options.length]=new
			Option('Ogba/Egbema/Ndoni','Ogba/Egbema/Ndoni');
			selbox.options[selbox.options.length]=new
			Option('Ogu/Bolo','Ogu/Bolo');
			selbox.options[selbox.options.length]=new
			Option('Okrika','Okrika');
			selbox.options[selbox.options.length]=new
			Option('Omumma','Omumma');
			selbox.options[selbox.options.length]=new
			Option('Opobo/Nkoro','Opobo/Nkoro');
			selbox.options[selbox.options.length]=new
			Option('Oyigbo','Oyigbo');
			selbox.options[selbox.options.length]=new
			Option('Port-Harcourt','Port-Harcourt');
			selbox.options[selbox.options.length]=new
			Option('Tai','Tai');
	}
	if (chosen == "Sokoto") {
			selbox.options[selbox.options.length] = new
			Option('','');
			selbox.options[selbox.options.length]=new
			Option('Binji','Binji');
			selbox.options[selbox.options.length]=new
			Option('Bodinga','Bodinga');
			selbox.options[selbox.options.length]=new
			Option('Dange-shnsi','Dange-shnsi');
			selbox.options[selbox.options.length]=new
			Option('Gada','Gada');
			selbox.options[selbox.options.length]=new
			Option('Goronyo','Goronyo');
			selbox.options[selbox.options.length]=new
			Option('Gudu','Gudu');
			selbox.options[selbox.options.length]=new
			Option('Gawabawa','Gawabawa');
			selbox.options[selbox.options.length]=new
			Option('Illela','Illela');
			selbox.options[selbox.options.length]=new
			Option('Isa','Isa');
			selbox.options[selbox.options.length]=new
			Option('Kware','Kware');
			selbox.options[selbox.options.length]=new
			Option('kebbe','kebbe');
			selbox.options[selbox.options.length]=new
			Option('Rabah','Rabah');
			selbox.options[selbox.options.length]=new
			Option('Sabon birni','Sabon birni');
			selbox.options[selbox.options.length]=new
			Option('Shagari','Shagari');
			selbox.options[selbox.options.length]=new
			Option('Silame','Silame');
			selbox.options[selbox.options.length]=new
			Option('Sokoto North','Sokoto North');
			selbox.options[selbox.options.length]=new
			Option('Sokoto South','Sokoto South');
			selbox.options[selbox.options.length]=new
			Option('Tambuwal','Tambuwal');
			selbox.options[selbox.options.length]=new
			Option('Tqngaza','Tqngaza');
			selbox.options[selbox.options.length]=new
			Option('Tureta','Tureta');
	}
	if (chosen == "Taraba") {
			selbox.options[selbox.options.length] = new
			Option('','');
			selbox.options[selbox.options.length]=new
			Option('Ardo-kola','Ardo-kola');
			selbox.options[selbox.options.length]=new
			Option('Bali','Bali');
			selbox.options[selbox.options.length]=new
			Option('Donga','Donga');
			selbox.options[selbox.options.length]=new
			Option('Gashaka','Gashaka');
			selbox.options[selbox.options.length]=new
			Option('Cassol','Cassol');
			selbox.options[selbox.options.length]=new
			Option('Ibi','Ibi');
			selbox.options[selbox.options.length]=new
			Option('Jalingo','Jalingo');
			selbox.options[selbox.options.length]=new
			Option('Karin-Lamido','Karin-Lamido');
			selbox.options[selbox.options.length]=new
			Option('Kurmi','Kurmi');
			selbox.options[selbox.options.length]=new
			Option('Lau','Lau');
			selbox.options[selbox.options.length]=new
			Option('Sardauna','Sardauna');
			selbox.options[selbox.options.length]=new
			Option('Takum','Takum');
			selbox.options[selbox.options.length]=new
			Option('Ussa','Ussa');
			selbox.options[selbox.options.length]=new
			Option('Wukari','Wukari');
			selbox.options[selbox.options.length]=new
			Option('Yorro','Yorro');
			selbox.options[selbox.options.length]=new
			Option('Zing','Zing');
	}
	if (chosen == "Zamfara") {
			selbox.options[selbox.options.length] = new
			Option('','');
			selbox.options[selbox.options.length]=new
			Option('Anka','Anka');
			selbox.options[selbox.options.length]=new
			Option('Bakura','Bakura');
			selbox.options[selbox.options.length]=new
			Option('Birnin Magaji','Birnin Magaji');
			selbox.options[selbox.options.length]=new
			Option('Bukkuyum','Bukkuyum');
			selbox.options[selbox.options.length]=new
			Option('Bungudu','Bungudu');
			selbox.options[selbox.options.length]=new
			Option('Gummi','Gummi');
			selbox.options[selbox.options.length]=new
			Option('Gusau','Gusau');
			selbox.options[selbox.options.length]=new
			Option('Kaura','Kaura');
			selbox.options[selbox.options.length]=new
			Option('Namoda','Namoda');
			selbox.options[selbox.options.length]=new
			Option('Maradun','Maradun');
			selbox.options[selbox.options.length]=new
			Option('Maru','Maru');
			selbox.options[selbox.options.length]=new
			Option('Shinkafi','Shinkafi');
			selbox.options[selbox.options.length]=new
			Option('Talata Mafara','Talata Mafara');
			selbox.options[selbox.options.length]=new
			Option('Tsafe','Tsafe');
			selbox.options[selbox.options.length]=new
			Option('Zurmi','Zurmi');
	}
}
