formaturl
=========

jQuery Format URL plugin. adds http:// in a textfield without interfering. This is a simple plugin that makes it so when you click within an empty field, it automatically prefixes it with http://. When you click out of the field, if the field value does not contain http:// it will add it.

Parameters:

protocol - You can add anything in here, it's what is used to prefix in the textfield. for example: 'http://', 'https://', etc. Defaults to http://.
alwaysShow - true or false. Defaults to false. If true, it will always show your protocol even if the field has an empty value. This can cause issues if you are submitting the data as it won't count the field as null or empty since it contains the protocol.

Example Usage:

$('#selector').formatUrl({
  protocol: 'https://',
  alwaysShow: true
});
