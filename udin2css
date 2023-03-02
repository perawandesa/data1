$(document).ready(function(){
	$(".wrap_content#dropdown").click(function(){
		var bagian = $(this).data("id");
		$(".wrap_content_active").hide("slow","linear");
		$(".arrow-up").slideUp("slow","linear");
		$(".wrap_content").show("slow","linear");
		$(".gelembung_informasi#atas").slideUp("slow","linear");
		$(".gelembung_informasi#bawah").slideUp("slow","linear");
			$(this).parent().children(".wrap_content_active").slideToggle("slow","linear");
			$(".wrap_content_active").attr("Id","selected");
			$(this).toggle(250,"linear");
			$(".gelembung_informasi#"+bagian).slideDown("slow","linear");
			//$(this).parent().children(".arrow-up").toggle("slow","linear"); yang asli
			$(this).parent().children(".arrow-up").slideDown("slow","linear");
			$("body").css("overflow-y","scroll");
			$("body").css("background-size","100% 150%");
		var menu 	=  	$(this).parent().children(".font-wrap").html();
		var masukan;
		switch (menu){
			case "Pelayanan Publik":
				masukan = "<div class='listing'><a href='http://disdukcapil.kotabogor.go.id/'> Kependudukan dan Pencatatan Sipil</a><br /><br /><a href='http://dispenda.kotabogor.go.id'> Pajak dan Retribusi Daerah</a><br /><br /><a href='http://perizinan.kotabogor.go.id'> Perizinan</a></div><div class='listing'><a href='http://disnakersostrans.kotabogor.go.id'> Ketenaga Kerjaan</a><br /><br /><a href='http://kotabogor.go.id/index.php/page/detail/68/nomor-telepon-penting'> No. Telp Penting</a><br /><br /><a href='http://kotabogor.go.id/index.php/rute'> Rute Transportasi</a></div><div class='listing'><a href='http://kotabogor.go.id/index.php/page/detail/361/emergency-call-112'>SOS 112</a>";
				//masukan = menu;
			break;
			// case "Pengumuman":
			// 	masukan = "<div class='listing'><a>Masih Belum ada</a></div>";
			// break;
			case "Sekilas Kota Bogor":
				masukan = "<div class='listing'><a href='http://kotabogor.go.id/index.php/page/detail/5/sejarah-bogor'><i class='fa fa-long-arrow-right'></i> Sejarah Kota Bogor</a><br /><br /><a href='http://kotabogor.go.id/index.php/page/detail/8/lambang-kota-bogor'><i class='fa fa-long-arrow-right'></i> Lambang Kota Bogor</a><br /><br /><a href='http://kotabogor.go.id/index.php/page/detail/9/letak-geografis'><i class='fa fa-long-arrow-right'></i> Letak Geografis</a></div><div class='listing'><a href='http://simpatik.kotabogor.go.id/'><i class='fa fa-long-arrow-right'></i> Data Demografi</a><br /><br /><a href='http://kotabogor.go.id/index.php/page/detail/78/peta-kota-bogor'><i class='fa fa-long-arrow-right'></i> Peta Kota Bogor</a><br /><br /><a href='http://kotabogor.go.id/index.php/gallery/detailalbum/1'><i class='fa fa-long-arrow-right'></i> Bogor Tempo Dulu</a></div>";
			break;
			case "Pemerintahan":
				masukan = "<div class='listing'><a href='http://kotabogor.go.id/index.php/page/detail/54/pimpinan-daerah'><i class='fa fa-long-arrow-right'></i> Pimpinan Daerah</a><br /><br /><a href='http://kotabogor.go.id/index.php/page/detail/39/data-muspimwil-dan-muspida-kota-bogor'><i class='fa fa-long-arrow-right'></i> Muspimwil / Muspidu</a><br /><br /><a href='http://kotabogor.go.id/index.php/page/detail/1/struktur-organisasi'><i class='fa fa-long-arrow-right'></i> Struktur Pemerintahan</a></div><div class='listing'><a href='http://kotabogor.go.id/index.php/page/detail/6/rencana-kerja-kota-bogor'><i class='fa fa-long-arrow-right'></i> Dokumen Perencanaan</a><br /><br /><a href='#'><i class='fa fa-long-arrow-right'></i> Subdomain / Aplikasi</a><br /><br /><a href='http://siskum.kotabogor.go.id/'><i class='fa fa-long-arrow-right'></i> Perundang - Undangan</a></div><div class='listing'><a href='http://kotabogor.go.id/index.php/page/detail/52/opd'><i class='fa fa-long-arrow-right'></i> Perangkat Daerah</a><br /><br />	<a href='http://kotabogor.go.id/index.php/page/detail/62/bumd'><i class='fa fa-long-arrow-right'></i> BUMD</a><br /><br /><a href='http://kotabogor.go.id/index.php/page/detail/119/prestasi-dan-penghargaan'><i class='fa fa-long-arrow-right'></i> Prestasi Penghargaan</a></div><div class='listing'><a href='http://kotabogor.go.id/index.php/page/detail/81/kerjasama-pemerintah-daerah'><i class='fa fa-long-arrow-right'></i> Kerjasama Pemerintah Daerah</a><br /><br /></div>";
			break;
			case "Investasi":
				masukan = "<div class='listing'><a href='http://bpptpm.kotabogor.go.id/index.php/multisite/layanankategori/36'><i class='fa fa-long-arrow-right'></i> Izin Bidang Pelayanan Modal</a><br /><br /><a href='http://kotabogor.go.id/index.php/page/detail/120/potensi-usaha'><i class='fa fa-long-arrow-right'></i> Potensi Usaha</a><br /><br /><a href='http://kotabogor.go.id/index.php/page/detail/121/daerah-pengembangan-usaha'><i class='fa fa-long-arrow-right'></i> Daerah Pengembangan Usaha</a></div><div class='listing'><a href='http://kotabogor.go.id/index.php/page/detail/122/perencanaan-usaha'><i class='fa fa-long-arrow-right'></i> Perencanaan Usaha</a><br /><br /><a href='http://kotabogor.go.id/index.php/page/detail/23/infrastruktur'><i class='fa fa-long-arrow-right'></i> Infrastruktur</a><br /><br /><a href='http://kotabogor.go.id/index.php/page/detail/17/produk-unggulan'><i class='fa fa-long-arrow-right'></i> Produk Unggulan</a></div><div class='listing'><a href='http://kotabogor.go.id/index.php/page/detail/124/industri'><i class='fa fa-long-arrow-right'></i> Industri</a><br /><br /><a href='http://kotabogor.go.id/index.php/page/detail/125/ariwisata'><i class='fa fa-long-arrow-right'></i> Pariwisata</a><br /><br /><a href='http://kotabogor.go.id/index.php/page/detail/20/pendidikan'><i class='fa fa-long-arrow-right'></i> Pendidikan</a></div><div class='listing'><a href='http://kotabogor.go.id/index.php/page/detail/24/ekspor'><i class='fa fa-long-arrow-right'></i> Ekspor</a><br /><br /><a href='http://kumkm.kotabogor.go.id'><i class='fa fa-long-arrow-right'></i> Daftar UKM</a><br /><br /></div>";
			break;
			/*case "Transparansi":
				masukan = "<div class='listing'><a href='http://kotabogor.go.id/index.php/page/detail/299/ringkasan-rka-skpd'><i class='fa fa-long-arrow-right'></i> Ringkasan RKA SKPD</a><br /><br /><a href='http://kotabogor.go.id/index.php/page/detail/102/ringkasan-rka-ppkd'><i class='fa fa-long-arrow-right'></i> Ringkasan RKA PPKD</a><br /><br /><a href='http://kotabogor.go.id/index.php/page/detail/80/perda-tentang-apbd%20'><i class='fa fa-long-arrow-right'></i> Perda Tentang APBD</a></div><div class='listing'><a href='http://kotabogor.go.id/index.php/page/detail/258/perwali-tentang-apbd-'><i class='fa fa-long-arrow-right'></i> Perwali Tentang APBD</a><br /><br /><a href='http://kotabogor.go.id/index.php/page/detail/113/raperda-tentang-apbd-02'><i class='fa fa-long-arrow-right'></i> RAPERDA Tentang APBD</a><br /><br /><a href='#'><i lass='fa fa-long-arrow-right'></i> RAPERDA Tentang Perubahan APBD</a></div><div class='listing'><a href='http://kotabogor.go.id/index.php/page/detail/280/ringkasan-dpa-skpd-tahun-2015'><i class='fa fa-long-arrow-right'></i> Ringkasan DPA SKPD</a><br /><br /><a href='http://kotabogor.go.id/index.php/page/detail/110/ringkasan-dpa-ppkd'><i class='fa fa-long-arrow-right'></i> Ringkasan DPA PPKD</a><br /><br /><a href='http://kotabogor.go.id/index.php/page/detail/104/lra-seluruh-skpd-2014'><i class='fa fa-long-arrow-right'></i> LRA Seluruh SKPD</a></div><div class='listing'><a href='#'><i class='fa fa-long-arrow-right'></i> LRA PPKD</a><br /><br /><a href='http://kotabogor.go.id/index.php/page/detail/107/lkpd-sudah-teraudit#.WcHlcfOg_IU'><i class='fa fa-long-arrow-right'></i> LKPD Sudah Teraudit</a><br /><br /><a href='http://kotabogor.go.id/index.php/page/detail/282/opini-atas-lkpd'><i class='fa fa-long-arrow-right'></i> Laporan Keterbukaan Informasi Publik</a></div><div class='listing'><a href='http://kotabogor.go.id/index.php/page/detail/382/ppid-kota-bogor'><i class='fa fa-long-arrow-right'></i> PPID Kota Bogor</a><br /><br /><a href='http://kotabogor.go.id/index.php/page/detail/400/laporan-kinerja-instansi-pemerintah'><i class='fa fa-long-arrow-right'></i> Laporan Kinerja Instansi Pemerintah</a><br /><br /><a href='http://kotabogor.go.id/index.php/page/detail/401/indikator-kinerja-utama'><i class='fa fa-long-arrow-right'></i> Indikator Kinerja Utama</a></div>";
			break;*/
/*			case "Transparansi":
				masukan = "<div class='listing'><a href='https://ppid.kotabogor.go.id/index.php/post/index/2/80'><i class='fa fa-long-arrow-right'></i> Ringkasan RKA SKPD</a><br /><br /><a href='https://ppid.kotabogor.go.id/index.php/post/index/2/81'><i class='fa fa-long-arrow-right'></i> Ringkasan RKA PPKD</a><br /><br /><a href='https://ppid.kotabogor.go.id/index.php/post/index/2/83'><i class='fa fa-long-arrow-right'></i> Perda Tentang APBD</a></div><div class='listing'><a href='https://ppid.kotabogor.go.id/index.php/post/index/2/84-'><i class='fa fa-long-arrow-right'></i> Perwali Tentang APBD</a><br /><br /><a href='https://ppid.kotabogor.go.id/index.php/post/index/2/99'><i class='fa fa-long-arrow-right'></i> RAPERDA Tentang APBD</a><br /><br /><a href='#'><i lass='fa fa-long-arrow-right'></i> RAPERDA Tentang Perubahan APBD</a></div><div class='listing'><a href='https://ppid.kotabogor.go.id/index.php/post/index/2/86'><i class='fa fa-long-arrow-right'></i> Ringkasan DPA SKPD</a><br /><br /><a href='http://kotabogor.go.id/index.php/page/detail/110/ringkasan-dpa-ppkd'><i class='fa fa-long-arrow-right'></i> Ringkasan DPA PPKD</a><br /><br /><a href='#'><i class='fa fa-long-arrow-right'></i> LRA Seluruh SKPD</a></div><div class='listing'><a href='#'><i class='fa fa-long-arrow-right'></i> LRA PPKD</a><br /><br /><a href='https://ppid.kotabogor.go.id/index.php/post/index/2/77'><i class='fa fa-long-arrow-right'></i> LKPD Sudah Teraudit</a><br /><br /><a href='https://ppid.kotabogor.go.id/index.php/post/index/2/100'><i class='fa fa-long-arrow-right'></i> Laporan Keterbukaan Informasi Publik</a></div><div class='listing'><a href='https://ppid.kotabogor.go.id/'><i class='fa fa-long-arrow-right'></i> PPID Kota Bogor</a><br /><br /><a href='https://ppid.kotabogor.go.id/index.php/post/index/2/89'><i class='fa fa-long-arrow-right'></i> Laporan Kinerja Instansi Pemerintah</a><br /><br /><a href='https://ppid.kotabogor.go.id/index.php/post/index/2/102'><i class='fa fa-long-arrow-right'></i> Indikator Kinerja Utama</a></div>";
			break; */
            case "Transparansi":
                masukan = "<div class='listing'><a href='https://kotabogor.go.id/index.php/page/detail/462/perda-apbd-2020'><i class='fa fa-long-arrow-right'></i> PERDA APBD</a><br /><br /><a href='https://kotabogor.go.id/index.php/page/detail/463/perwali-apbd-2020'><i class='fa fa-long-arrow-right'></i> PERWALI APBD Tahun 2020</a><br /><br />	<a href='https://ppid.kotabogor.go.id/'><i class='fa fa-long-arrow-right'></i> PPID Kota Bogor</a></div><div class='listing'><a href='https://ppid.kotabogor.go.id/index.php/post/index/2/110'><i class='fa fa-long-arrow-right'></i>Perwali Tentang APBD</a><br /><br />	<a href='https://ppid.kotabogor.go.id/index.php/post/index/2/105'><i class='fa fa-long-arrow-right'></i> RAPERDA Tentang APBD</a></div><div class='listing'><a href='https://ppid.kotabogor.go.id/index.php/post/index/2/86'><i class='fa fa-long-arrow-right'></i> Ringkasan DPA SKPD</a><br /><br /><a href='http://ppid.kotabogor.go.id/index.php/post/index/2/117'><i class='fa fa-long-arrow-right'></i> Reformasi Birokrasi</a>	<br /><br /><a href='https://ppid.kotabogor.go.id/index.php/post/index/2/77'><i class='fa fa-long-arrow-right'></i> LKPD Sudah Teraudit</a></div><div class='listing'><a href='https://ppid.kotabogor.go.id/index.php/post/index/2/100'><i class='fa fa-long-arrow-right'></i> Lap Keterbukaan Informasi Publik</a><br /><br /><a href='https://ppid.kotabogor.go.id/index.php/post/index/2/89'><i class='fa fa-long-arrow-right'></i> Lap Kinerja Instansi Pemerintah</a><br /><br /><a href='https://ppid.kotabogor.go.id/index.php/post/index/2/102'><i class='fa fa-long-arrow-right'></i> Indikator Kinerja Utama</a></div>";
            	break;	
			case "Pariwisata":
				masukan = "<div class='listing'><a href='http://direktori.kotabogor.go.id/index.php/situs/wisatahot'><i class='fa fa-long-arrow-right'></i> Hotel</a><br /><br /><a href='http://direktori.kotabogor.go.id/index.php/situs/wisatakul'><i class='fa fa-long-arrow-right'></i> Rumah Makan dan Restoran</a><br /><br /><a href='http://direktori.kotabogor.go.id/index.php/situs/wisatatrav'><i class='fa fa-long-arrow-right'></i> Tour dan Travel</a></div>
  <div class='listing'><a href='#'><i class='fa fa-long-arrow-right'></i> Money Changer</a><br /><br /><a href='http://direktori.kotabogor.go.id/index.php/situs/wisatabel'><i class='fa fa-long-arrow-right'></i> Pusat Perbelanjaan</a><br /><br /><a href='http://direktori.kotabogor.go.id/index.php/situs/wisatahib'><i class='fa fa-long-arrow-right'></i> Tempat Rekreasi</a></div>
  <div class='listing'><a href='#'><i class='fa fa-long-arrow-right'></i> Jajanan Oleh - Oleh</a><br /><br /><a href='http://direktori.kotabogor.go.id/index.php/situs/wisatacend'><i class='fa fa-long-arrow-right'></i> Kerajinan dan Sovenir</a><br /><br /><a href='https://destinasi.kotabogor.go.id/'><i class='fa fa-long-arrow-right'></i> Destinasi Wisata</a></div>
  <div class='listing'><a href='https://nongkrongsehatbogor.com/'>Smoke Free Directory</a></div>";
			break;
		}
		$(".gelembung_informasi#"+bagian).html(masukan);
	});
	$(".wrap_content_active").click(function(){
		$(this).parent().children(".wrap_content").slideToggle("slow","linear");
		$(this).toggle(250,"linear");
		$(".gelembung_informasi#bawah").slideUp("slow","linear");
		$(".gelembung_informasi#atas").slideUp("slow","linear");
		$(this).parent().children(".arrow-up").slideUp("slow","linear");
		$("body").css("overflow-y","hidden");
		$("body").css("background-size","100% 100%");
	});
	 var w = window,
		     d = document,
		     e = d.documentElement,
	  	     g = d.body,
		     x = w.innerWidth || e.clientWidth || g.clientWidth, // x = Lebar layar
		     y = w.innerHeight || e.clientHeight || g.clientHeight; // y = Tinggi layar

		// // Tampilkan lebar dan tinggi layar dalam kotak pesan
		 //alert('Lebar layar: ' + x + '; Tinggi layar: ' + y);
});
