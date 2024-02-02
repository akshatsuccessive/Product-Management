$(document).ready(function () {
    $('#myTable').DataTable({
        "order": [],
        "lengthMenu": [[100, 200, 300, -1], ["100", "200", "300", "All"]],
        "pageLength": 100,
        "bFilter": true,
    });

    var oTable;
    oTable = $('#myTable').dataTable();

    $('#FilterByCategory').on('change', function () {
        var selectedCategory = $(this).val();
        //sessionStorage.setItem('TheCategory', selectedCategory);
        console.log(selectedCategory);


        // Loop through each row in the table body
        $('#myTable tbody tr').each(function () {
            var categoryInRow = $(this).find('td:eq(3)').text(); // Assuming "Category" is at index 3
            if (selectedCategory === '' || categoryInRow === selectedCategory) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
        $.ajax({
            url: '/Home/Privacy',
            type: 'POST',
            data: { myData: selectedCategory },
            success: function (data) {
                sessionStorage.setItem('TheCategory', selectedCategory)
                console.log(data.success)
            },
            error: function () {
                alert("error");
            }
        });
    });
}); 
