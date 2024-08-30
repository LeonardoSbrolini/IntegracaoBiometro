export const convertJsonToSmartModel = (jsonData: any): string => {
  let processedString = '';

  const extractValue = (data: any): string => {
    if (typeof data === 'object' && data !== null) {
      return data._ || '';  // Pega o valor contido na chave "_" se for um objeto
    }
    return data ? data.toString() : '';
  };

  const addDataToProcessedString = (key: string, prefix: any, value: any) => {
    const extractedValue = extractValue(value);
    if (extractedValue) {
      processedString += `${key}${prefix}${value}`;
    }
  };

  addDataToProcessedString('@#120167@1', 'O', `${jsonData.Ophthalmology.Measure.VD._}mm`);
  addDataToProcessedString('@#120167@2', 'O', `AL(${jsonData.Ophthalmology.Measure.IOL.R.SelectData}), ACD(${jsonData.Ophthalmology.Measure.IOL.R.SelectDataACD})`);
  addDataToProcessedString('@#120167@3', 'O', `${jsonData.Ophthalmology.Measure.IOL.R.Optical.AxialLength._}${jsonData.Ophthalmology.Measure.IOL.R.Optical.AxialLength.$.unit}`);
  addDataToProcessedString('@#120167@4', 'O', `${jsonData.Ophthalmology.Measure.IOL.R.Optical.AxialLengthOffset._}${jsonData.Ophthalmology.Measure.IOL.R.Optical.AxialLengthOffset.$.unit}`);
  addDataToProcessedString('@#120167@5', 'O', `${jsonData.Ophthalmology.Measure.IOL.R.Optical.ACD._}${jsonData.Ophthalmology.Measure.IOL.R.Optical.ACD.$.unit}`);
  addDataToProcessedString('@#120167@6', 'O', `${jsonData.Ophthalmology.Measure.IOL.R.Optical.AxialLengthSNR._}`);
  // addDataToProcessedString('@#120167@7', 'O', `${jsonData.Ophthalmology.Measure.IOL.R.Ultrasound.AxialLength._}${jsonData.Ophthalmology.Measure.IOL.R.Ultrasound.AxialLength.$.unit}`);
  // addDataToProcessedString('@#120167@8', 'O', `${jsonData.Ophthalmology.Measure.IOL.R.Ultrasound.AxialLengthOffset._}${jsonData.Ophthalmology.Measure.IOL.R.Ultrasound.AxialLengthOffset.$.unit}`);
  // addDataToProcessedString('@#120167@9', 'O', `${jsonData.Ophthalmology.Measure.IOL.R.Ultrasound.ACD._}${jsonData.Ophthalmology.Measure.IOL.R.Ultrasound.ACD.$.unit}`);
  // addDataToProcessedString('@#120167@10', 'O', `${jsonData.Ophthalmology.Measure.IOL.R.Ultrasound.Immersion._}`);
  // addDataToProcessedString('@#120167@11', 'O', `${jsonData.Ophthalmology.Measure.IOL.R.Ultrasound.Operator}`);
  addDataToProcessedString('@#120167@12', 'O', `${jsonData.Ophthalmology.Measure.IOL.R.KM[0].R1.Radius._}${jsonData.Ophthalmology.Measure.IOL.R.KM[0].R1.Radius.$.unit} ${jsonData.Ophthalmology.Measure.IOL.R.KM[0].R1.Power._}${jsonData.Ophthalmology.Measure.IOL.R.KM[0].R1.Power.$.unit} ${jsonData.Ophthalmology.Measure.IOL.R.KM[0].R1.Axis._}${jsonData.Ophthalmology.Measure.IOL.R.KM[0].R1.Axis.$.unit}`);
  addDataToProcessedString('@#120167@13', 'O', `${jsonData.Ophthalmology.Measure.IOL.R.KM[0].R2.Radius._}${jsonData.Ophthalmology.Measure.IOL.R.KM[0].R2.Radius.$.unit} ${jsonData.Ophthalmology.Measure.IOL.R.KM[0].R2.Power._}${jsonData.Ophthalmology.Measure.IOL.R.KM[0].R2.Power.$.unit} ${jsonData.Ophthalmology.Measure.IOL.R.KM[0].R2.Axis._}${jsonData.Ophthalmology.Measure.IOL.R.KM[0].R2.Axis.$.unit}`);
  addDataToProcessedString('@#120167@14', 'O', `${jsonData.Ophthalmology.Measure.IOL.R.KM[0].Average.Radius._}${jsonData.Ophthalmology.Measure.IOL.R.KM[0].Average.Radius.$.unit} ${jsonData.Ophthalmology.Measure.IOL.R.KM[0].Average.Power._}${jsonData.Ophthalmology.Measure.IOL.R.KM[0].Average.Power.$.unit}`);
  addDataToProcessedString('@#120167@17', 'O', `${jsonData.Ophthalmology.Measure.IOL.R.KM[1].R1.Radius._}${jsonData.Ophthalmology.Measure.IOL.R.KM[1].R1.Radius.$.unit} ${jsonData.Ophthalmology.Measure.IOL.R.KM[1].R1.Power._}${jsonData.Ophthalmology.Measure.IOL.R.KM[1].R1.Power.$.unit} ${jsonData.Ophthalmology.Measure.IOL.R.KM[1].R1.Axis._}${jsonData.Ophthalmology.Measure.IOL.R.KM[1].R1.Axis.$.unit}`);
  addDataToProcessedString('@#120167@18', 'O', `${jsonData.Ophthalmology.Measure.IOL.R.KM[1].R2.Radius._}${jsonData.Ophthalmology.Measure.IOL.R.KM[1].R2.Radius.$.unit} ${jsonData.Ophthalmology.Measure.IOL.R.KM[1].R2.Power._}${jsonData.Ophthalmology.Measure.IOL.R.KM[1].R2.Power.$.unit} ${jsonData.Ophthalmology.Measure.IOL.R.KM[1].R2.Axis._}${jsonData.Ophthalmology.Measure.IOL.R.KM[1].R2.Axis.$.unit}`);
  addDataToProcessedString('@#120167@19', 'O', `${jsonData.Ophthalmology.Measure.IOL.R.KM[1].Average.Radius._}${jsonData.Ophthalmology.Measure.IOL.R.KM[1].Average.Radius.$.unit} ${jsonData.Ophthalmology.Measure.IOL.R.KM[1].Average.Power._}${jsonData.Ophthalmology.Measure.IOL.R.KM[1].Average.Power.$.unit}`);
  addDataToProcessedString('@#120167@20', 'O', `${jsonData.Ophthalmology.Measure.IOL.R.KM[1].Cylinder.Power._}${jsonData.Ophthalmology.Measure.IOL.R.KM[1].Cylinder.Power.$.unit} ${jsonData.Ophthalmology.Measure.IOL.R.KM[1].Cylinder.Axis._}${jsonData.Ophthalmology.Measure.IOL.R.KM[1].Cylinder.Axis.$.unit}`);
  addDataToProcessedString('@#120167@21', 'O', `${jsonData.Ophthalmology.Measure.IOL.R.Target._}${jsonData.Ophthalmology.Measure.IOL.R.Target.$.unit}`);
  addDataToProcessedString('@#120167@22', 'O', `${jsonData.Ophthalmology.Measure.IOL.R.EyeType._}${jsonData.Ophthalmology.Measure.IOL.R.EyeType.$.unit}`);
  addDataToProcessedString('@#120167@23', 'O', `${jsonData.Ophthalmology.Measure.IOL.R.RefractiveIndex}`);
  addDataToProcessedString('@#120167@24', 'O', `${jsonData.Ophthalmology.Measure.IOL.R.CamellinCalossi.Sergery}`);
  addDataToProcessedString('@#120167@25', 'O', `${jsonData.Ophthalmology.Measure.IOL.R.CamellinCalossi.SIRC}`);
  addDataToProcessedString('@#120167@26', 'O', `${jsonData.Ophthalmology.Measure.IOL.R.CamellinCalossi.LensThickness._}${jsonData.Ophthalmology.Measure.IOL.R.CamellinCalossi.LensThickness.$.unit}`);
  addDataToProcessedString('@#120167@27', 'O', `AL(${jsonData.Ophthalmology.Measure.IOL.L.SelectData}), ACD(${jsonData.Ophthalmology.Measure.IOL.L.SelectDataACD})`);
  addDataToProcessedString('@#120167@28', 'O', `${jsonData.Ophthalmology.Measure.IOL.L.Optical.AxialLength._}${jsonData.Ophthalmology.Measure.IOL.L.Optical.AxialLength.$.unit}`);
  addDataToProcessedString('@#120167@29', 'O', `${jsonData.Ophthalmology.Measure.IOL.L.Optical.AxialLengthOffset._}${jsonData.Ophthalmology.Measure.IOL.L.Optical.AxialLengthOffset.$.unit}`);
  addDataToProcessedString('@#120167@30', 'O', `${jsonData.Ophthalmology.Measure.IOL.L.Optical.ACD._}${jsonData.Ophthalmology.Measure.IOL.L.Optical.ACD.$.unit}`);
  // addDataToProcessedString('@#120167@31', 'O', `${jsonData.Ophthalmology.Measure.IOL.L.Ultrasound.AxialLength._}${jsonData.Ophthalmology.Measure.IOL.L.Ultrasound.AxialLength.$.unit}`);
  // addDataToProcessedString('@#120167@32', 'O', `${jsonData.Ophthalmology.Measure.IOL.L.Ultrasound.AxialLengthOffset._}${jsonData.Ophthalmology.Measure.IOL.L.Ultrasound.AxialLengthOffset.$.unit}`);
  // addDataToProcessedString('@#120167@33', 'O', `${jsonData.Ophthalmology.Measure.IOL.L.Ultrasound.ACD._}${jsonData.Ophthalmology.Measure.IOL.L.Ultrasound.ACD.$.unit}`);
  // addDataToProcessedString('@#120167@34', 'O', `${jsonData.Ophthalmology.Measure.IOL.L.Ultrasound.Immersion._}`);
  // addDataToProcessedString('@#120167@35', 'O', `${jsonData.Ophthalmology.Measure.IOL.L.Ultrasound.Operator}`);
  addDataToProcessedString('@#120167@36', 'O', `${jsonData.Ophthalmology.Measure.IOL.L.KM[0].$.condition}`);
  addDataToProcessedString('@#120167@37', 'O', `${jsonData.Ophthalmology.Measure.IOL.L.KM[0].R1.Radius._}${jsonData.Ophthalmology.Measure.IOL.L.KM[0].R1.Radius.$.unit} ${jsonData.Ophthalmology.Measure.IOL.L.KM[0].R1.Power._}${jsonData.Ophthalmology.Measure.IOL.L.KM[0].R1.Power.$.unit} ${jsonData.Ophthalmology.Measure.IOL.L.KM[0].R1.Axis._}${jsonData.Ophthalmology.Measure.IOL.L.KM[0].R1.Axis.$.unit}`);
  addDataToProcessedString('@#120167@38', 'O', `${jsonData.Ophthalmology.Measure.IOL.L.KM[0].R2.Radius._}${jsonData.Ophthalmology.Measure.IOL.L.KM[0].R2.Radius.$.unit} ${jsonData.Ophthalmology.Measure.IOL.L.KM[0].R2.Power._}${jsonData.Ophthalmology.Measure.IOL.L.KM[0].R2.Power.$.unit} ${jsonData.Ophthalmology.Measure.IOL.L.KM[0].R2.Axis._}${jsonData.Ophthalmology.Measure.IOL.L.KM[0].R2.Axis.$.unit}`);
  addDataToProcessedString('@#120167@39', 'O', `${jsonData.Ophthalmology.Measure.IOL.L.KM[0].Average.Radius._}${jsonData.Ophthalmology.Measure.IOL.L.KM[0].Average.Radius.$.unit} ${jsonData.Ophthalmology.Measure.IOL.L.KM[0].Average.Power._}${jsonData.Ophthalmology.Measure.IOL.L.KM[0].Average.Power.$.unit}`);
  addDataToProcessedString('@#120167@40', 'O', `${jsonData.Ophthalmology.Measure.IOL.L.KM[0].Cylinder.Power._}${jsonData.Ophthalmology.Measure.IOL.L.KM[0].Cylinder.Power.$.unit} ${jsonData.Ophthalmology.Measure.IOL.L.KM[0].Cylinder.Axis._}${jsonData.Ophthalmology.Measure.IOL.L.KM[0].Cylinder.Axis.$.unit}`);
  addDataToProcessedString('@#120167@41', 'O', `${jsonData.Ophthalmology.Measure.IOL.L.KM[1].$.condition}`);
  addDataToProcessedString('@#120167@42', 'O', `${jsonData.Ophthalmology.Measure.IOL.L.KM[1].R1.Radius._}${jsonData.Ophthalmology.Measure.IOL.L.KM[1].R1.Radius.$.unit} ${jsonData.Ophthalmology.Measure.IOL.L.KM[1].R1.Power._}${jsonData.Ophthalmology.Measure.IOL.L.KM[1].R1.Power.$.unit} ${jsonData.Ophthalmology.Measure.IOL.L.KM[1].R1.Axis._}${jsonData.Ophthalmology.Measure.IOL.L.KM[1].R1.Axis.$.unit}`);
  addDataToProcessedString('@#120167@43', 'O', `${jsonData.Ophthalmology.Measure.IOL.L.KM[1].R2.Radius._}${jsonData.Ophthalmology.Measure.IOL.L.KM[1].R2.Radius.$.unit} ${jsonData.Ophthalmology.Measure.IOL.L.KM[1].R2.Power._}${jsonData.Ophthalmology.Measure.IOL.L.KM[1].R2.Power.$.unit} ${jsonData.Ophthalmology.Measure.IOL.L.KM[1].R2.Axis._}${jsonData.Ophthalmology.Measure.IOL.L.KM[1].R2.Axis.$.unit}`);
  addDataToProcessedString('@#120167@44', 'O', `${jsonData.Ophthalmology.Measure.IOL.L.KM[1].Cylinder.Power._}${jsonData.Ophthalmology.Measure.IOL.L.KM[1].Cylinder.Power.$.unit} ${jsonData.Ophthalmology.Measure.IOL.L.KM[1].Cylinder.Axis._}${jsonData.Ophthalmology.Measure.IOL.L.KM[1].Cylinder.Axis.$.unit}`);
  addDataToProcessedString('@#120167@45', 'O', `${jsonData.Ophthalmology.Measure.IOL.L.Optical.AxialLengthSNR._}`);
  addDataToProcessedString('@#120167@46', 'O', `${jsonData.Ophthalmology.Measure.IOL.L.Target._}${jsonData.Ophthalmology.Measure.IOL.L.Target.$.unit}`);
  addDataToProcessedString('@#120167@47', 'O', `${jsonData.Ophthalmology.Measure.IOL.L.EyeType._}${jsonData.Ophthalmology.Measure.IOL.L.EyeType.$.unit}`);
  addDataToProcessedString('@#120167@48', 'O', `${jsonData.Ophthalmology.Measure.IOL.L.RefractiveIndex}`);
  addDataToProcessedString('@#120167@49', 'O', `${jsonData.Ophthalmology.Measure.IOL.L.CamellinCalossi.Sergery}`);
  addDataToProcessedString('@#120167@50', 'O', `${jsonData.Ophthalmology.Measure.IOL.L.CamellinCalossi.SIRC}`);
  addDataToProcessedString('@#120167@51', 'O', `${jsonData.Ophthalmology.Measure.IOL.L.CamellinCalossi.LensThickness._}${jsonData.Ophthalmology.Measure.IOL.L.CamellinCalossi.LensThickness.$.unit}`);
  addDataToProcessedString('@#120167@52', 'M', `${jsonData.Ophthalmology.Measure.IOL.IOLList[0].Formula}`);
  addDataToProcessedString('@#120167@54', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[0].ModelName}`);
  addDataToProcessedString('@#120167@55', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[0].Manufacture}`);
  addDataToProcessedString('@#120167@56', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[0].a0._}`);
  addDataToProcessedString('@#120167@57', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[0].a1._}`);
  addDataToProcessedString('@#120167@58', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[0].a2._}`);
  addDataToProcessedString('@#120167@59', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[0].R.IOLPower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[0].R.IOLPower.$.unit}`);
  addDataToProcessedString('@#120167@60', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[0].R.List[0].IOLPower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[0].R.List[0].IOLPower.$.unit}`);
  addDataToProcessedString('@#120167@61', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[0].R.List[1].IOLPower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[0].R.List[1].IOLPower.$.unit}`);
  addDataToProcessedString('@#120167@62', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[0].R.List[2].IOLPower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[0].R.List[2].IOLPower.$.unit}`);
  addDataToProcessedString('@#120167@63', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[0].R.List[3].IOLPower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[0].R.List[3].IOLPower.$.unit}`);
  addDataToProcessedString('@#120167@64', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[0].R.List[4].IOLPower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[0].R.List[4].IOLPower.$.unit}`);
  addDataToProcessedString('@#120167@65', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[0].R.List[5].IOLPower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[0].R.List[5].IOLPower.$.unit}`);
  addDataToProcessedString('@#120167@66', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[0].R.List[6].IOLPower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[0].R.List[6].IOLPower.$.unit}`);
  addDataToProcessedString('@#120167@68', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[0].R.List[0].RefractivePower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[0].R.List[0].RefractivePower.$.unit}`);
  addDataToProcessedString('@#120167@69', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[0].R.List[1].RefractivePower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[0].R.List[1].RefractivePower.$.unit}`);
  addDataToProcessedString('@#120167@70', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[0].R.List[2].RefractivePower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[0].R.List[2].RefractivePower.$.unit}`);
  addDataToProcessedString('@#120167@71', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[0].R.List[3].RefractivePower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[0].R.List[3].RefractivePower.$.unit}`);
  addDataToProcessedString('@#120167@72', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[0].R.List[4].RefractivePower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[0].R.List[4].RefractivePower.$.unit}`);
  addDataToProcessedString('@#120167@73', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[0].R.List[5].RefractivePower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[0].R.List[5].RefractivePower.$.unit}`);
  addDataToProcessedString('@#120167@74', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[0].R.List[6].RefractivePower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[0].R.List[6].RefractivePower.$.unit}`);
  addDataToProcessedString('@#120167@75', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[1].Formula}`);
  addDataToProcessedString('@#120167@76', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[1].ModelName}`);
  addDataToProcessedString('@#120167@77', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[1].Manufacture}`);
  addDataToProcessedString('@#120167@78', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[1].a0._}`);
  addDataToProcessedString('@#120167@79', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[1].a1._}`);
  addDataToProcessedString('@#120167@80', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[1].a2._}`);
  addDataToProcessedString('@#120167@81', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[1].R.IOLPower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[1].R.IOLPower.$.unit}`);
  addDataToProcessedString('@#120167@82', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[1].R.List[0].IOLPower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[1].R.List[0].IOLPower.$.unit}`);
  addDataToProcessedString('@#120167@83', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[1].R.List[1].IOLPower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[1].R.List[1].IOLPower.$.unit}`);
  addDataToProcessedString('@#120167@84', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[1].R.List[2].IOLPower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[1].R.List[2].IOLPower.$.unit}`);
  addDataToProcessedString('@#120167@85', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[1].R.List[3].IOLPower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[1].R.List[3].IOLPower.$.unit}`);
  addDataToProcessedString('@#120167@86', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[1].R.List[4].IOLPower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[1].R.List[4].IOLPower.$.unit}`);
  addDataToProcessedString('@#120167@87', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[1].R.List[5].IOLPower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[1].R.List[5].IOLPower.$.unit}`);
  addDataToProcessedString('@#120167@88', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[1].R.List[6].IOLPower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[1].R.List[6].IOLPower.$.unit}`);
  addDataToProcessedString('@#120167@89', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[1].R.List[0].RefractivePower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[1].R.List[0].RefractivePower.$.unit}`);
  addDataToProcessedString('@#120167@90', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[1].R.List[1].RefractivePower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[1].R.List[1].RefractivePower.$.unit}`);
  addDataToProcessedString('@#120167@91', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[1].R.List[2].RefractivePower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[1].R.List[2].RefractivePower.$.unit}`);
  addDataToProcessedString('@#120167@92', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[1].R.List[3].RefractivePower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[1].R.List[3].RefractivePower.$.unit}`);
  addDataToProcessedString('@#120167@93', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[1].R.List[4].RefractivePower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[1].R.List[4].RefractivePower.$.unit}`);
  addDataToProcessedString('@#120167@94', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[1].R.List[5].RefractivePower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[1].R.List[5].RefractivePower.$.unit}`);
  addDataToProcessedString('@#120167@95', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[1].R.List[6].RefractivePower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[1].R.List[6].RefractivePower.$.unit}`);
  addDataToProcessedString('@#120167@96', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[2].Formula}`);
  addDataToProcessedString('@#120167@97', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[2].ModelName}`);
  addDataToProcessedString('@#120167@98', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[2].Manufacture}`);
  addDataToProcessedString('@#120167@99', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[2].a0._}`);
  addDataToProcessedString('@#120771@3', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[2].a2._}`);
  addDataToProcessedString('@#120771@4', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[2].a1._}`);
  addDataToProcessedString('@#120771@5', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[2].L.IOLPower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[2].L.IOLPower.$.unit}`);
  addDataToProcessedString('@#120771@6', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[2].L.List[1].IOLPower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[2].L.List[1].IOLPower.$.unit}`);
  addDataToProcessedString('@#120771@7', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[2].L.List[0].IOLPower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[2].L.List[0].IOLPower.$.unit}`);
  addDataToProcessedString('@#120771@8', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[2].L.List[2].IOLPower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[2].L.List[2].IOLPower.$.unit}`);
  addDataToProcessedString('@#120771@9', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[2].L.List[3].IOLPower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[2].L.List[3].IOLPower.$.unit}`);
  addDataToProcessedString('@#120771@10', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[2].L.List[4].IOLPower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[2].L.List[4].IOLPower.$.unit}`);
  addDataToProcessedString('@#120771@11', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[2].L.List[5].IOLPower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[2].L.List[5].IOLPower.$.unit}`);
  addDataToProcessedString('@#120771@12', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[2].L.List[6].IOLPower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[2].L.List[6].IOLPower.$.unit}`);
  addDataToProcessedString('@#120771@13', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[2].L.List[0].RefractivePower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[2].L.List[0].RefractivePower.$.unit}`);
  addDataToProcessedString('@#120771@14', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[2].L.List[1].RefractivePower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[2].L.List[1].RefractivePower.$.unit}`);
  addDataToProcessedString('@#120771@15', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[2].L.List[3].RefractivePower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[2].L.List[3].RefractivePower.$.unit}`);
  addDataToProcessedString('@#120771@16', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[2].L.List[6].RefractivePower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[2].L.List[6].RefractivePower.$.unit}`);
  addDataToProcessedString('@#120771@17', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[2].L.List[4].RefractivePower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[2].L.List[4].RefractivePower.$.unit}`);
  addDataToProcessedString('@#120771@18', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[2].L.List[5].RefractivePower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[2].L.List[5].RefractivePower.$.unit}`);
  addDataToProcessedString('@#120771@19', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[2].L.List[2].RefractivePower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[2].L.List[2].RefractivePower.$.unit}`);
  addDataToProcessedString('@#120771@20', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[3].Formula}`);
  addDataToProcessedString('@#120771@21', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[3].ModelName}`);
  addDataToProcessedString('@#120771@22', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[3].Manufacture}`);
  addDataToProcessedString('@#120771@23', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[3].a0._}`);
  addDataToProcessedString('@#120771@24', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[3].a1._}`);
  addDataToProcessedString('@#120771@25', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[3].a2._}`);
  addDataToProcessedString('@#120771@26', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[3].L.IOLPower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[3].L.IOLPower.$.unit}`);
  addDataToProcessedString('@#120771@27', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[3].L.List[0].IOLPower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[3].L.List[0].IOLPower.$.unit}`);
  addDataToProcessedString('@#120771@28', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[3].L.List[1].IOLPower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[3].L.List[1].IOLPower.$.unit}`);
  addDataToProcessedString('@#120771@29', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[3].L.List[2].IOLPower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[3].L.List[2].IOLPower.$.unit}`);
  addDataToProcessedString('@#120771@30', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[3].L.List[3].IOLPower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[3].L.List[3].IOLPower.$.unit}`);
  addDataToProcessedString('@#120771@31', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[3].L.List[4].IOLPower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[3].L.List[4].IOLPower.$.unit}`);
  addDataToProcessedString('@#120771@32', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[3].L.List[5].IOLPower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[3].L.List[5].IOLPower.$.unit}`);
  addDataToProcessedString('@#120771@33', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[3].L.List[6].IOLPower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[3].L.List[6].IOLPower.$.unit}`);
  addDataToProcessedString('@#120771@34', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[3].L.List[0].RefractivePower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[3].L.List[0].RefractivePower.$.unit}`);
  addDataToProcessedString('@#120771@35', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[3].L.List[1].RefractivePower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[3].L.List[1].RefractivePower.$.unit}`);
  addDataToProcessedString('@#120771@36', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[3].L.List[2].RefractivePower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[3].L.List[2].RefractivePower.$.unit}`);
  addDataToProcessedString('@#120771@37', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[3].L.List[3].RefractivePower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[3].L.List[3].RefractivePower.$.unit}`);
  addDataToProcessedString('@#120771@38', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[3].L.List[4].RefractivePower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[3].L.List[4].RefractivePower.$.unit}`);
  addDataToProcessedString('@#120771@39', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[3].L.List[5].RefractivePower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[3].L.List[5].RefractivePower.$.unit}`);
  addDataToProcessedString('@#120771@40', 'O', `${jsonData.Ophthalmology.Measure.IOL.IOLList[3].L.List[6].RefractivePower._}${jsonData.Ophthalmology.Measure.IOL.IOLList[3].L.List[6].RefractivePower.$.unit}`);
  addDataToProcessedString('@#120771@41', 'O', `${jsonData.Ophthalmology.Measure.IOL.L.KM[1].$.condition}`);
  addDataToProcessedString('@#120771@42', 'O', `${jsonData.Ophthalmology.Measure.IOL.L.KM[1].Average.Radius._}${jsonData.Ophthalmology.Measure.IOL.L.KM[1].Average.Radius.$.unit} ${jsonData.Ophthalmology.Measure.IOL.L.KM[1].Average.Power._}${jsonData.Ophthalmology.Measure.IOL.L.KM[1].Average.Power.$.unit}`);
  addDataToProcessedString('@#120771@43', 'O', `${jsonData.Ophthalmology.Measure.IOL.R.KM[0].$.condition}`);
  addDataToProcessedString('@#120771@44', 'O', `${jsonData.Ophthalmology.Measure.IOL.R.KM[1].$.condition}`);

  return processedString;
};
