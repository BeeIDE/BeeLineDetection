Blockly.defineBlocksWithJsonArray([
  {
    "type": "line_read",
    "message0": "%3 %2 get sensor %1",
    "args0": [
      {
        "type": "field_grid_dropdown",
        "name": "sensor",
        "columns": 4,
        "options": [
          ["IR 1", "IR1"],
          ["IR 2", "IR2"],
          ["IR 3", "IR3"],
          ["IR 4", "IR4"]
        ]
      },
      {
        "type": "field_grid_dropdown",
        "name": "port",
        "columns": 2,
        "options": [
          ["PORt1", "PORT1"],
          ["PORT2", "PORT2"],
          ["PORT3", "PORT3"],
          ["PORT4", "PORT4"],
          ["PORT5", "PORT5"],
          ["PORT6", "PORT6"],
        ]
      },
      {
        "type": "field_image",
        "src": "/static/MicroBlock/images/icon/IR.png",
        "width": 45,
        "height": 45,
        "alt": "IR"
      }
    ],
    "inputsInline": true,
    "output": ["Number", "Boolean"],
    "colour": "#690300",
    "tooltip": "",
    "helpUrl": ""
  },
]);
