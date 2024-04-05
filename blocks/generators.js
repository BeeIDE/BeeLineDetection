function check_if_top_block_has_hat(block){
   if (block.getRootBlock().hat === 'cap') return true;
   else return false;
}

Blockly.Python['line_read'] = function(block) {
   if (!check_if_top_block_has_hat(block)) return ['', Blockly.Python.ORDER_NONE];
   Blockly.Python.definitions_['from_BeeBrain_import_bee'] = 'from BeeBrain import bee';
   Blockly.Python.definitions_['from_BeeLineDetect_import_BeeLineDetect'] = 'from BeeLineDetect import BeeLineDetect';

   var port = block.getFieldValue('port');
   Blockly.Python.definitions_['lineDetect_BeeLineDetect'] = `lineDetect = BeeLineDetect(bee.${port})`;

   var sensor = block.getFieldValue('sensor');
   var code = `lineDetect.pin(lineDetect.${sensor})`;
   return [code, Blockly.Python.ORDER_NONE];
};