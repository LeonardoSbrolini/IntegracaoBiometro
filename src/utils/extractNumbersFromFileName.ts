export function extractNumbersFromFileName(fileName: string): string {
  // Usamos uma expressão regular para capturar três grupos de números:
  // O primeiro grupo é flexível, o segundo tem exatamente 8 dígitos e o terceiro tem exatamente 6 dígitos
  const regex = /_(\d+)_(\d{8})_(\d{6})_/;
  const match = fileName.match(regex);

  if (match) {
    // Concatena os três grupos de números
    return match[1] + match[2] + match[3];
  }

  return ''; // Retorna uma string vazia se o padrão não for encontrado
}