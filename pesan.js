$(document).on('click', '.send', function () {
    /* Inputan Formulir */
    var input_tujuan = $("#tujuan").val(),
        input_penjemputan = $("#penjemputan").val(),
        input_tanggal = $("#tanggal").val(),
        input_waktu = $("#waktu").val(),
        input_penumpang = $(".selectpicker option:selected").val();

    /* Pengaturan Whatsapp */
    var walink = 'https://web.whatsapp.com/send',
        phone = '6285925749600',
        text = 'Halo, saya ingin memesan layanan antar jemput. Berikut rincian pesanannya: ',
        text_yes = 'Pesanan Anda berhasil terkirim.',
        text_no = 'Isilah formulir terlebih dahulu.';

    /* Smartphone Support */
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var walink = 'whatsapp://send';
    }

    if (input_tujuan != "" && input_penjemputan != "" && input_tanggal != "" && input_waktu != "") {
        /* Whatsapp URL */
        var checkout_whatsapp = walink + '?phone=' + phone + '&text=' + text + '%0A%0A' +
            '*Penjemputan* : ' + input_penjemputan + '%0A' +
            '*Tujuan* : ' + input_tujuan + '%0A' +
            '*Tanggal Penjemputan* : ' + input_tanggal + '%0A' +
            '*Waktu Jemput* : ' + input_waktu + '%0A' +
            '*Jumlah Penumpang* : ' + input_penumpang + '%0A';

        /* Whatsapp Window Open */
        window.open(checkout_whatsapp, '_blank');
        $("#text-info").html('<div class="alert alert-success">' + text_yes + '</div>');
    } else {
        $("#text-info").html('<div class="alert alert-danger">' + text_no + '</div>');
    }
});
