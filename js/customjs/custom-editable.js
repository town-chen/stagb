//editable page table settings
'use strict'
$("#jsGrid").jsGrid({
    width: "100%",
    height: "50%",

    filtering: false,
    editing: true,
    sorting: true,
    paging: true,

    data: db.clients,

    fields: [
        { name: "Name", type: "text", width: 150 },
        { name: "Age", type: "number", width: 50 },
        { name: "Address", type: "text", width: 200 },
        { name: "Country", type: "select", items: db.countries, valueField: "Id", textField: "Name" },
        { name: "Married", type: "checkbox", title: "Is Married", sorting: false },
        { type: "control" }
    ]
});
$('#data_table').editableTableWidget();
$('#data_table').DataTable();