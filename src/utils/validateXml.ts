export function ValidateXML(fileName: string) {
  if (fileName.includes('_IOL_')) {
    console.log('XML VÁLIDO');
    return true;
  } else {
    console.log('XML inválido');
    return false;
  }
}