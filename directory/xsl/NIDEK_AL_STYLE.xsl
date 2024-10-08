<?xml version="1.0" encoding="UTF-16"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<head>
				<title>AL Examination Data Style Sheet Ver1.05</title>
			</head>
			<body>
				<xsl:apply-templates select="Ophthalmology" />
				<br />
				<a title="Nidek home page" href="http://www.nidek.co.jp/">
					<address align="center">NIDEK CO., LTD.</address>
				</a>
			</body>
		</html>
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="Ophthalmology">
		<h1 align="center">
			<xsl:value-of select="Common/ModelName" /> Examination Data
		</h1>
		<table border="1" width="600" align="center">
			<colgroup>
				<col span="2" style="background:#E0E0E0" />
			</colgroup>
			<xsl:apply-templates select="Common" />

			<xsl:apply-templates select="Measure" mode="COMM" />
		</table>
		<br />
		<table width="600" align="center" cellpadding="0" cellspacing="0">
			<tr>
				<th width="300">
					<xsl:call-template name="RightEye" />
				</th>
				<th width="300">
					<xsl:call-template name="LeftEye" />
				</th>
			</tr>
			<xsl:apply-templates select="Measure" mode="DATA" />
		</table>
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="Common">
		<tr>
			<th colspan="2" width="300">Company</th>
			<td width="300">
				<xsl:value-of select="Company" />
			</td>
		</tr>
		<tr>
			<th colspan="2">Model Name</th>
			<td>
				<xsl:value-of select="ModelName" />
			</td>
		</tr>
		<tr>
			<th colspan="2">ROM Version</th>
			<td>
				<xsl:value-of select="ROMVersion" />
			</td>
		</tr>
		<tr>
			<th colspan="2">Format Version</th>
			<td>
				<xsl:value-of select="Version" />
			</td>
		</tr>
		<tr>
			<th colspan="2">Date</th>
			<td>
				<xsl:value-of select="Date" />
			</td>
		</tr>
		<tr>
			<th colspan="2">Time</th>
			<td>
				<xsl:value-of select="Time" />
			</td>
		</tr>
		<xsl:apply-templates select="Patient" />
		<xsl:apply-templates select="Operator" />
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="Patient">
		<tr>
			<th rowspan="7">Patient</th>
			<th>ID</th>
			<td>
				<xsl:value-of select="ID" />
			</td>
		</tr>
		<tr>
			<th>First Name</th>
			<td>
				<xsl:value-of select="FirstName" />
			</td>
		</tr>
		<tr>
			<th>Middle Name</th>
			<td>
				<xsl:value-of select="MiddleName" />
			</td>
		</tr>
		<tr>
			<th>Last Name</th>
			<td>
				<xsl:value-of select="LastName" />
			</td>
		</tr>
		<tr>
			<th>Sex</th>
			<td>
				<xsl:value-of select="Sex" />
			</td>
		</tr>
		<tr>
			<th>Date of Birth</th>
			<td>
				<xsl:value-of select="DOB" />
			</td>
		</tr>
		<tr>
			<th>Memo</th>
			<td>
				<xsl:value-of select="Memo" />
			</td>
		</tr>
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="Operator">
		<tr>
			<th rowspan="2">Operator</th>
			<th>No.</th>
			<td>
				<xsl:value-of select="No." />
			</td>
		</tr>
		<tr>
			<th>ID</th>
			<td>
				<xsl:value-of select="ID" />
			</td>
		</tr>
	</xsl:template>
	
	<!--============================================================================================-->
	<xsl:template match="Measure" mode="COMM">
		<xsl:choose>
			<xsl:when test="@type='IOL'">
				<xsl:call-template name="COMM_PARA_IOL" />
			</xsl:when>
		</xsl:choose>

		<xsl:choose>
			<xsl:when test="@type='KM'">
				<xsl:call-template name="COMM_PARA_KM" />
			</xsl:when>
			<xsl:when test="@type='TRC'">
				<xsl:call-template name="COMM_PARA_KM" />
			</xsl:when>
		</xsl:choose>
	</xsl:template>
	
	<!--============================================================================================-->
	<xsl:template name="COMM_PARA_IOL">
		<tr>
			<th colspan="2">Vertex Distance</th>
			<td>
				<xsl:value-of select="VD" />
				<xsl:value-of select="VD/@unit" />
			</td>
		</tr>

		<tr>
			<th colspan="2">Diopter Step</th>
			<td>
				<xsl:value-of select="DiopterStep" />
				<xsl:value-of select="DiopterStep/@unit" />
			</td>
		</tr>
		
		<tr>
			<th colspan="2">Axis Step</th>
			<td>
				<xsl:value-of select="AxisStep" />
				<xsl:value-of select="AxisStep/@unit" />
			</td>
		</tr>

		<tr>
			<th colspan="2">Cylinder Mode</th>
			<td>
				<xsl:value-of select="CylinderMode" />
			</td>
		</tr>
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template name="COMM_PARA_KM">
		<tr>
			<th colspan="2">Diopter Step</th>
			<td>
				<xsl:value-of select="DiopterStep" />
				<xsl:value-of select="DiopterStep/@unit" />
			</td>
		</tr>
		
		<tr>
			<th colspan="2">Axis Step</th>
			<td>
				<xsl:value-of select="AxisStep" />
				<xsl:value-of select="AxisStep/@unit" />
			</td>
		</tr>

		<tr>
			<th colspan="2">Cylinder Mode</th>
			<td>
				<xsl:value-of select="CylinderMode" />
			</td>
		</tr>
		
		<tr>
			<th colspan="2">Refractive Index</th>
			<td>
				<xsl:value-of select="RefractiveIndex" />
			</td>
		</tr>

	</xsl:template>

	<!--============================================================================================-->
	<xsl:template name="RightEye">
		<a name="Right">
			<h2 align="center">Right Eye</h2>
		</a>
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template name="LeftEye">
		<a name="Left">
			<h2 align="center">Left Eye</h2>
		</a>
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="Measure" mode="DATA">
		<xsl:if test="@type='AL'">
			<table width="600" align="center" cellpadding="0" cellspacing="0">
				<xsl:call-template name="MEASURE_AL" />
			</table>
		</xsl:if>

		<xsl:if test="@type='KM'">
			<table width="600" align="center" cellpadding="0" cellspacing="0">
				<xsl:call-template name="MEASURE_KM" />
			</table>
		</xsl:if>

		<xsl:if test="@type='CCT'">
			<table width="600" align="center" cellpadding="0" cellspacing="0">
				<xsl:call-template name="MEASURE_CCT" />
			</table>
		</xsl:if>

		<xsl:if test="@type='ACD'">
			<table width="600" align="center" cellpadding="0" cellspacing="0">
				<xsl:call-template name="MEASURE_ACD" />
			</table>
		</xsl:if>

		<xsl:if test="@type='WTW'">
			<table width="600" align="center" cellpadding="0" cellspacing="0">
				<xsl:call-template name="MEASURE_WTW" />
			</table>
		</xsl:if>
		
		<xsl:if test="@type='PS'">
			<table width="600" align="center" cellpadding="0" cellspacing="0">
				<xsl:call-template name="MEASURE_PS" />
			</table>
		</xsl:if>
		
		<xsl:if test="@type='BIO'">
			<table width="600" align="center" cellpadding="0" cellspacing="0">
				<xsl:call-template name="MEASURE_BIO" />
			</table>
		</xsl:if>
		
		<xsl:if test="@type='PACHY'">
			<table width="600" align="center" cellpadding="0" cellspacing="0">
				<xsl:call-template name="MEASURE_PACHY" />
			</table>
		</xsl:if>
		
		<xsl:if test="@type='IOL'">
			<table width="600" align="center" cellpadding="0" cellspacing="0">
				<xsl:call-template name="MEASURE_IOL" />
			</table>
		</xsl:if>

		<xsl:if test="@type='TRC'">
			<table width="600" align="center" cellpadding="0" cellspacing="0">
				<xsl:call-template name="MEASURE_TRC" />
			</table>
		</xsl:if>
	</xsl:template>
	
	<!--============================================================================================-->
	<xsl:template name="MEASURE_AL">
		<tr>
			<th colspan="2" align="center">
				<font size="+3">
					Axial Length
				</font>
			</th>
		</tr>

		<table border="1" width="600" align="center">
			<colgroup>
				<col span="1" style="background:#E0E0E0" />
			</colgroup>
			<tr>
				<th>AL Offset</th>
				<td>
					<xsl:value-of select="AxialLengthOffset" />
					<xsl:value-of select="AxialLengthOffset/@unit" />
				</td>
			</tr>
		</table>
		<br />

		<table width="600" align="center" cellpadding="0" cellspacing="0">
			<tr>
				<td style="vertical-align:top">
					<table border="1" width="300" align="center">
						<xsl:apply-templates select="AL/R" />
					</table>
					<br />
				</td>
				<td style="vertical-align:top">
					<table border="1" width="300" align="center">
						<xsl:apply-templates select="AL/L" />
					</table>
					<br />
				</td>
			</tr>
		</table>
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="AL/R">
		<xsl:call-template name="AL_RL" />
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="AL/L">
		<xsl:call-template name="AL_RL" />
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template name="AL_RL">
		<colgroup>
			<col span="1" style="background:#E0E0E0" />
		</colgroup>
		<tr>
			<th colspan="1">Eye Type</th>
			<td colspan="2">
				<xsl:value-of select="EyeType" />
			</td>
		</tr>

		<tr style="background:silver">
			<th>No</th>
			<th>AL</th>
			<th>SNR</th>
		</tr>
		<xsl:apply-templates select="List" mode="AL" />
		<xsl:apply-templates select="Typical" mode="AL" />
		<xsl:apply-templates select="Image" mode="AL" />
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="List" mode="AL">
		<tr>
			<th>
				<xsl:value-of select="@No" />
			</th>
			<xsl:if test="count(Error)!=0">
				<td>
					<xsl:value-of select="Error" />
				</td>
			</xsl:if>
			<xsl:if test="count(Error)=0">
				<td>
					<xsl:if test="AxialLength/@change='on'">#</xsl:if>
					<xsl:value-of select="AxialLength" />
					<xsl:value-of select="AxialLength/@errordata" />
				</td>
			</xsl:if>
			<td>
				<xsl:if test="SNR/@change='on'">#</xsl:if>
				<xsl:value-of select="SNR" />
			</td>
		</tr>
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="Typical" mode="AL">
		<tr>
			<th>Typical</th>
			<xsl:if test="count(Error)!=0">
				<td>
					<xsl:value-of select="Error" />
				</td>
			</xsl:if>
			<xsl:if test="count(Error)=0">
				<td>
					<xsl:if test="AxialLength/@change='on'">#</xsl:if>
					<xsl:value-of select="AxialLength" />
					<xsl:value-of select="AxialLength/@errordata" />
				</td>
			</xsl:if>
			<td>
				<xsl:if test="SNR/@change='on'">#</xsl:if>
				<xsl:value-of select="SNR" />
			</td>
		</tr>
	</xsl:template>
	
	<!--============================================================================================-->
	<xsl:template match="Image" mode="AL">
		<tr>
			<td colspan="10" style="background:white">
				<a target="_blank">
					<xsl:attribute name="href">
						<xsl:value-of select="FileName" />
					</xsl:attribute>
					<img border="0" width="290" alt="AL Wave">
						<xsl:attribute name="src">
							<xsl:value-of select="FileName" />
						</xsl:attribute>
					</img>
				</a>
			</td>
		</tr>
		<tr>
			<td colspan="10" style="background:white;font-size:8pt;word-break:break-all">
				<a title="Ring image" target="_blank">
					<xsl:attribute name="href">
						<xsl:value-of select="FileName" />
					</xsl:attribute>
					<xsl:value-of select="FileName" />
				</a>
			</td>
		</tr>
	</xsl:template>
	
	<!--============================================================================================-->
	<xsl:template name="MEASURE_KM">
		<tr>
			<th colspan="2" align="center">
				<font size="+3">
					Keratometer
				</font>
			</th>
		</tr>

		<table border="1" width="600" align="center">
			<colgroup>
				<col span="1" style="background:#E0E0E0" />
			</colgroup>
			<tr>
				<th>Select Data</th>
				<td>
					<xsl:value-of select="SelectData" />
				</td>
			</tr>
		</table>
		
		<table width="600" align="center" cellpadding="0" cellspacing="0">
			<xsl:apply-templates select="KM" />
		</table>
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="KM">
		<xsl:if test="@condition='Φ2.4mm'">
			<xsl:call-template name="KM_MIRE" />
		</xsl:if>
		<xsl:if test="@condition='Φ3.3mm'">
			<xsl:call-template name="KM_MIRE" />
		</xsl:if>
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template name="KM_MIRE">
		<tr>
			<th colspan="2" align="center">
				<font size="+1">
					Mire = <xsl:value-of select="@condition" />
				</font>
			</th>
		</tr>
		<tr>
			<td style="vertical-align:top">
				<table border="1" width="300" align="center">
					<xsl:apply-templates select="R" mode="KM"/>
				</table>
				<br />
			</td>
			<td style="vertical-align:top">
				<table border="1" width="300" align="center">
					<xsl:apply-templates select="L" mode="KM"/>
				</table>
				<br />
			</td>
		</tr>
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="R" mode="KM">
		<xsl:call-template name="KM_RL" />
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="L" mode="KM">
		<xsl:call-template name="KM_RL" />
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template name="KM_RL">
		<colgroup>
			<col span="2" style="background:#E0E0E0" />
		</colgroup>
		<tr style="background:silver">
			<th colspan="2">No</th>
			<th>mm</th>
			<th>Diopter</th>
			<th>Axis</th>
		</tr>
		
		<xsl:apply-templates select="List" mode="KM" />
		<xsl:apply-templates select="Typical" mode="KM" />
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="List" mode="KM">
		<tr>
			<th rowspan="4">
				<xsl:value-of select="@No" />
			</th>
			<th>R1</th>
			<xsl:apply-templates select="R1" mode="KM" />
		</tr>
		<tr>
			<th>R2</th>
			<xsl:apply-templates select="R2" mode="KM" />
		</tr>
		<tr>
			<th>AVG</th>
			<xsl:apply-templates select="Average" mode="KM" />
		</tr>
		<tr>
			<th>CYL</th>
			<xsl:apply-templates select="Cylinder" mode="KM" />
		</tr>
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="Typical" mode="KM">
		<tr>
			<th rowspan="4">Typical</th>
			<th>R1</th>
			<xsl:apply-templates select="R1" mode="KM" />
		</tr>
		<tr>
			<th>R2</th>
			<xsl:apply-templates select="R2" mode="KM" />
		</tr>
		<tr>
			<th>AVG</th>
			<xsl:apply-templates select="Average" mode="KM" />
		</tr>
		<tr>
			<th>CYL</th>
			<xsl:apply-templates select="Cylinder" mode="KM" />
		</tr>
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="R1" mode="KM">
		<xsl:call-template name="KM_R" />
	</xsl:template>
	
	<!--============================================================================================-->
	<xsl:template match="R2" mode="KM">
		<xsl:call-template name="KM_R" />
	</xsl:template>
	
	<!--============================================================================================-->
	<xsl:template name="KM_R">
		<td>
			<xsl:if test="Radius/@change='on'">#</xsl:if>
			<xsl:value-of select="Radius" />
		</td>
		<td>
			<xsl:if test="Power/@change='on'">#</xsl:if>
			<xsl:value-of select="Power" />
		</td>
		<td>
			<xsl:if test="Axis/@change='on'">#</xsl:if>
			<xsl:value-of select="Axis" />
		</td>
	</xsl:template>
	
	<!--============================================================================================-->
	<xsl:template match="Average" mode="KM">
		<td>
			<xsl:value-of select="Radius" />
		</td>
		<td>
			<xsl:value-of select="Power" />
		</td>
	</xsl:template>
	
	<!--============================================================================================-->
	<xsl:template match="Cylinder" mode="KM">
		<td />
		<td>
			<xsl:value-of select="Power" />
		</td>
		<td>
			<xsl:value-of select="Axis" />
		</td>
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template name="MEASURE_CCT">
		<tr>
			<th colspan="2" align="center">
				<font size="+3">
					CCT
				</font>
			</th>
		</tr>
		<tr>
			<td style="vertical-align:top">
				<table border="1" width="300" align="center">
					<xsl:apply-templates select="CCT/R" />
				</table>
				<br />
			</td>
			<td style="vertical-align:top">
				<table border="1" width="300" align="center">
					<xsl:apply-templates select="CCT/L" />
				</table>
				<br />
			</td>
		</tr>
	</xsl:template>
	
	<!--============================================================================================-->
	<xsl:template match="CCT/R">
		<xsl:call-template name="CCT_RL" />
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="CCT/L">
		<xsl:call-template name="CCT_RL" />
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template name="CCT_RL">
		<colgroup>
			<col span="1" style="background:#E0E0E0" />
		</colgroup>
		<tr style="background:silver">
			<th>No</th>
			<th>CCT</th>
		</tr>
		<xsl:apply-templates select="List" mode="CCT" />
		<xsl:apply-templates select="Typical" mode="CCT" />
		<xsl:apply-templates select="Image" mode="CCT" />
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="List" mode="CCT">
		<tr>
			<th>
				<xsl:value-of select="@No" />
			</th>
		
			<xsl:if test="count(Error)!=0">
				<td colspan="2">
					<xsl:value-of select="Error" />
				</td>
			</xsl:if>
			<xsl:if test="count(Error)=0">
				<td>
					<xsl:value-of select="CCT" />
				</td>
			</xsl:if>
		</tr>
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="Typical" mode="CCT">
		<tr>
			<th>Typical</th>

			<xsl:if test="count(Error)!=0">
				<td colspan="2">
					<xsl:value-of select="Error" />
				</td>
			</xsl:if>
			<xsl:if test="count(Error)=0">
				<td>
					<xsl:value-of select="CCT" />
				</td>
			</xsl:if>
		</tr>
	</xsl:template>
	
	<!--============================================================================================-->
	<xsl:template match="Image" mode="CCT">
		<tr>
			<td colspan="3" style="background:white">
				<a target="_blank">
					<xsl:attribute name="href">
						<xsl:value-of select="FileName" />
					</xsl:attribute>
					<img border="0" width="290" alt="CCT Image">
						<xsl:attribute name="src">
							<xsl:value-of select="FileName" />
						</xsl:attribute>
					</img>
				</a>
			</td>
		</tr>
		<tr>
			<td colspan="3" style="background:white;font-size:8pt;word-break:break-all">
				<a title="Ring image" target="_blank">
					<xsl:attribute name="href">
						<xsl:value-of select="FileName" />
					</xsl:attribute>
					<xsl:value-of select="FileName" />
				</a>
			</td>
		</tr>
		<tr>
			<th>Image</th>
			<td colspan="2">
				<xsl:value-of select="FileName/@condition" />
			</td>
		</tr>
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template name="MEASURE_ACD">
		<tr>
			<th colspan="2" align="center">
				<font size="+3">
					ACD
				</font>
			</th>
		</tr>
		<tr>
			<td style="vertical-align:top">
				<table border="1" width="300" align="center">
					<xsl:apply-templates select="ACD/R" />
				</table>
				<br />
			</td>
			<td style="vertical-align:top">
				<table border="1" width="300" align="center">
					<xsl:apply-templates select="ACD/L" />
				</table>
				<br />
			</td>
		</tr>
	</xsl:template>
	
	<!--============================================================================================-->
	<xsl:template match="ACD/R">
		<xsl:call-template name="ACD_RL" />
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="ACD/L">
		<xsl:call-template name="ACD_RL" />
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template name="ACD_RL">
		<colgroup>
			<col span="1" style="background:#E0E0E0" />
		</colgroup>
		<tr style="background:silver">
			<th>No</th>
			<th>ACD</th>
		</tr>
		<xsl:apply-templates select="List" mode="ACD" />
		<xsl:apply-templates select="Typical" mode="ACD" />
		<xsl:apply-templates select="Image" mode="ACD" />
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="List" mode="ACD">
		<tr>
			<th>
				<xsl:value-of select="@No" />
			</th>
			
			<xsl:if test="count(Error)!=0">
				<td>
					<xsl:value-of select="Error" />
				</td>
			</xsl:if>
			<xsl:if test="count(Error)=0">
				<td>
					<xsl:value-of select="ACD" />
					<xsl:value-of select="ACD/@errordata" />
				</td>
			</xsl:if>
		</tr>
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="Typical" mode="ACD">
		<tr>
			<th>Typical</th>
			
			<xsl:if test="count(Error)!=0">
				<td>
					<xsl:value-of select="Error" />
				</td>
			</xsl:if>
			<xsl:if test="count(Error)=0">
				<td>
					<xsl:value-of select="ACD" />
					<xsl:value-of select="ACD/@errordata" />
				</td>
			</xsl:if>
		</tr>
	</xsl:template>
	
	<!--============================================================================================-->
	<xsl:template match="Image" mode="ACD">
		<tr>
			<td colspan="3" style="background:white">
				<a target="_blank">
					<xsl:attribute name="href">
						<xsl:value-of select="FileName" />
					</xsl:attribute>
					<img border="0" width="290" alt="ACD Image">
						<xsl:attribute name="src">
							<xsl:value-of select="FileName" />
						</xsl:attribute>
					</img>
				</a>
			</td>
		</tr>
		<tr>
			<td colspan="3" style="background:white;font-size:8pt;word-break:break-all">
				<a title="Ring image" target="_blank">
					<xsl:attribute name="href">
						<xsl:value-of select="FileName" />
					</xsl:attribute>
					<xsl:value-of select="FileName" />
				</a>
			</td>
		</tr>
		<tr>
			<th>Image</th>
			<td colspan="2">
				<xsl:value-of select="FileName/@condition" />
			</td>
		</tr>
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template name="MEASURE_WTW">
		<tr>
			<th colspan="2" align="center">
				<font size="+3">
					White To White
				</font>
			</th>
		</tr>
		<tr>
			<td style="vertical-align:top">
				<table border="1" width="300" align="center">
					<xsl:apply-templates select="WTW/R" />
				</table>
				<br />
			</td>
			<td style="vertical-align:top">
				<table border="1" width="300" align="center">
					<xsl:apply-templates select="WTW/L" />
				</table>
				<br />
			</td>
		</tr>
	</xsl:template>
	
	<!--============================================================================================-->
	<xsl:template match="WTW/R">
		<xsl:call-template name="WTW_RL" />
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="WTW/L">
		<xsl:call-template name="WTW_RL" />
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template name="WTW_RL">
		<xsl:apply-templates select="Typical" mode="WTW" />
		<xsl:apply-templates select="Image" mode="WTW" />
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="Typical" mode="WTW">
		<tr>
			<th style="background:#E0E0E0">Size</th>
			<td>
				<xsl:if test="count(Error)!=0">
					<xsl:value-of select="Error" />
				</xsl:if>
				<xsl:if test="count(Error)=0">
					<xsl:if test="WhiteToWhite/@change='on'">#</xsl:if>
					<xsl:value-of select="WhiteToWhite" />
					<xsl:value-of select="WhiteToWhite/@unit" />
				</xsl:if>
			</td>
		</tr>
	</xsl:template>
	
	<!--============================================================================================-->
	<xsl:template match="Image" mode="WTW">
		<tr>
			<td colspan="10" style="background:white">
				<a target="_blank">
					<xsl:attribute name="href">
						<xsl:value-of select="FileName" />
					</xsl:attribute>
					<img border="0" width="290" alt="WhiteToWhite Image">
						<xsl:attribute name="src">
							<xsl:value-of select="FileName" />
						</xsl:attribute>
					</img>
				</a>
			</td>
		</tr>
		<tr>
			<td colspan="10" style="background:white;font-size:8pt;word-break:break-all">
				<a title="Ring image" target="_blank">
					<xsl:attribute name="href">
						<xsl:value-of select="FileName" />
					</xsl:attribute>
					<xsl:value-of select="FileName" />
				</a>
			</td>
		</tr>
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template name="MEASURE_PS">
		<tr>
			<th colspan="2" align="center">
				<font size="+3">
					Pupil
				</font>
			</th>
		</tr>

		<xsl:apply-templates select="PS" />
	</xsl:template>
	
	<!--============================================================================================-->
	<xsl:template match="PS">
		<xsl:if test="@condition='Lamp off'">
			<xsl:call-template name="PS_LAMP_OFF" />
		</xsl:if>
		<xsl:if test="@condition='Lamp on'">
			<xsl:call-template name="PS_LAMP_ON" />
		</xsl:if>
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template name="PS_LAMP_OFF">
		<tr>
			<th colspan="2" align="center">
				<font size="+1">
					Mesopic
				</font>
			</th>
		</tr>
		<tr>
			<td style="vertical-align:top">
				<table border="1" width="300" align="center">
					<xsl:apply-templates select="R" mode="PS"/>
				</table>
				<br />
			</td>
			<td style="vertical-align:top">
				<table border="1" width="300" align="center">
					<xsl:apply-templates select="L" mode="PS"/>
				</table>
				<br />
			</td>
		</tr>
	</xsl:template>
	
	<!--============================================================================================-->
	<xsl:template name="PS_LAMP_ON">
		<tr>
			<th colspan="2" align="center">
				<font size="+1">
					Photopic
				</font>
			</th>
		</tr>
		<tr>
			<td style="vertical-align:top">
				<table border="1" width="300" align="center">
					<xsl:apply-templates select="R" mode="PS"/>
				</table>
				<br />
			</td>
			<td style="vertical-align:top">
				<table border="1" width="300" align="center">
					<xsl:apply-templates select="L" mode="PS"/>
				</table>
				<br />
			</td>
		</tr>
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="R" mode="PS">
		<xsl:call-template name="PS_RL" />
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="L" mode="PS">
		<xsl:call-template name="PS_RL" />
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template name="PS_RL">
		<xsl:apply-templates select="Typical" mode="PS" />
		<xsl:apply-templates select="Image" mode="PS" />
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="Typical" mode="PS">
		<tr>
			<th style="background:#E0E0E0">Size</th>
			<td>
				<xsl:if test="count(Error)!=0">
					<xsl:value-of select="Error" />
				</xsl:if>
				<xsl:if test="count(Error)=0">
					<xsl:if test="PupilSize/@change='on'">#</xsl:if>
					<xsl:value-of select="PupilSize" />
					<xsl:value-of select="PupilSize/@unit" />
				</xsl:if>
			</td>
		</tr>
	</xsl:template>
	
	<!--============================================================================================-->
	<xsl:template match="Image" mode="PS">
		<tr>
			<td colspan="10" style="background:white">
				<a target="_blank">
					<xsl:attribute name="href">
						<xsl:value-of select="FileName" />
					</xsl:attribute>
					<img border="0" width="290" alt="Pupil Image">
						<xsl:attribute name="src">
							<xsl:value-of select="FileName" />
						</xsl:attribute>
					</img>
				</a>
			</td>
		</tr>
		<tr>
			<td colspan="10" style="background:white;font-size:8pt;word-break:break-all">
				<a title="Ring image" target="_blank">
					<xsl:attribute name="href">
						<xsl:value-of select="FileName" />
					</xsl:attribute>
					<xsl:value-of select="FileName" />
				</a>
			</td>
		</tr>
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template name="MEASURE_BIO">
		<tr>
			<th colspan="2" align="center">
				<font size="+3">
					Biometry
				</font>
			</th>
		</tr>

		<table border="1" width="600" align="center">
			<colgroup>
				<col span="1" style="background:#E0E0E0" />
			</colgroup>
			<tr>
				<th>AL Offset</th>
				<td>
					<xsl:value-of select="AxialLengthOffset" />
					<xsl:value-of select="AxialLengthOffset/@unit" />
				</td>
			</tr>
		</table>
		<br />

		<table width="600" align="center" cellpadding="0" cellspacing="0">
			<tr>
				<td style="vertical-align:top">
					<table border="1" width="300" align="center">
						<xsl:apply-templates select="BIO/R" />
					</table>
					<br />
				</td>
				<td style="vertical-align:top">
					<table border="1" width="300" align="center">
						<xsl:apply-templates select="BIO/L" />
					</table>
					<br />
				</td>
			</tr>
		</table>
	</xsl:template>
	
	<!--============================================================================================-->
	<xsl:template match="BIO/R">
		<xsl:call-template name="BIO_RL" />
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="BIO/L">
		<xsl:call-template name="BIO_RL" />
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template name="BIO_RL">
		<colgroup>
			<col span="1" style="background:#E0E0E0" />
		</colgroup>
		<tr>
			<th colspan="3">Eye Type</th>
			<td colspan="2">
				<xsl:value-of select="EyeType" />
			</td>
		</tr>
		<tr>
			<th colspan="3">Original Eye Type</th>
			<td colspan="2">
				<xsl:value-of select="OriginalEyeType" />
			</td>
		</tr>
		<tr>
			<th colspan="3">Axial Velocity</th>
			<td colspan="2">
				<xsl:value-of select="AxialVelocity" />
				<xsl:value-of select="AxialVelocity/@unit" />
			</td>
		</tr>
		<tr>
			<th colspan="3">ACD Velocity</th>
			<td colspan="2">
				<xsl:value-of select="ACDVelocity" />
				<xsl:value-of select="ACDVelocity/@unit" />
			</td>
		</tr>
		<tr>
			<th colspan="3">Lens Velocity</th>
			<td colspan="2">
				<xsl:value-of select="LensVelocity" />
				<xsl:value-of select="LensVelocity/@unit" />
			</td>
		</tr>
		<tr>
			<th colspan="3">IOL Velocity</th>
			<td colspan="2">
				<xsl:value-of select="IOLVelocity" />
				<xsl:value-of select="IOLVelocity/@unit" />
			</td>
		</tr>
		<tr>
			<th colspan="3">Vitreous Velocity</th>
			<td colspan="2">
				<xsl:value-of select="VitreousVelocity" />
				<xsl:value-of select="VitreousVelocity/@unit" />
			</td>
		</tr>
		<tr>
			<th colspan="3">IOL Thickness</th>
			<td colspan="2">
				<xsl:value-of select="IOLThickness" />
				<xsl:value-of select="IOLThickness/@unit" />
			</td>
		</tr>
		<tr>
			<th colspan="3">Measurement Mode</th>
			<td colspan="2">
				<xsl:value-of select="MeasurementMode" />
			</td>
		</tr>
		<tr>
			<th colspan="3">Threshold</th>
			<td colspan="2">
				<xsl:value-of select="Threshold" />
			</td>
		</tr>
		<tr>
			<th colspan="3">Gain</th>
			<td colspan="2">
				<xsl:value-of select="Gain" />
			</td>
		</tr>
		<tr>
			<th colspan="3">Mature Cataract</th>
			<td colspan="2">
				<xsl:value-of select="MatureCat" />
			</td>
		</tr>
		<xsl:apply-templates select="Immersion" mode="BIO" />

		<tr style="background:silver">
			<th>No</th>
			<th>AL</th>
			<th>ACD</th>
			<th>LT</th>
			<th>VL</th>
		</tr>
		<xsl:apply-templates select="List" mode="BIO" />
		<xsl:apply-templates select="Average" mode="BIO" />
		<xsl:apply-templates select="StandardDeviation" mode="BIO" />
		<xsl:apply-templates select="Typical" mode="BIO" />
		<xsl:apply-templates select="Image" mode="BIO" />
	</xsl:template>
	
	<!--============================================================================================-->
	<xsl:template match="Immersion" mode="BIO">
		<tr>
			<th colspan="3">Immersion</th>
			<td colspan="2">
				<xsl:value-of select="." />
			</td>
		</tr>
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="List" mode="BIO">
		<tr>
			<th>
				<xsl:value-of select="@No" />
			</th>
			<td>
				<xsl:value-of select="AxialLength" />
			</td>
			<td>
				<xsl:value-of select="ACD" />
			</td>
			<td>
				<xsl:value-of select="LensThickness" />
			</td>
			<td>
				<xsl:value-of select="VitreousThickness" />
			</td>
		</tr>
	</xsl:template>
	
	<!--============================================================================================-->
	<xsl:template match="Average" mode="BIO">
		<tr>
			<th>AVG</th>
			<td>
				<xsl:value-of select="AxialLength" />
			</td>
			<td>
				<xsl:value-of select="ACD" />
			</td>
			<td>
				<xsl:value-of select="LensThickness" />
			</td>
			<td>
				<xsl:value-of select="VitreousThickness" />
			</td>
		</tr>
	</xsl:template>
	
	<!--============================================================================================-->
	<xsl:template match="StandardDeviation" mode="BIO">
		<tr>
			<th>SD</th>
			<td>
				<xsl:value-of select="AxialLength" />
			</td>
			<td>
				<xsl:value-of select="ACD" />
			</td>
			<td>
				<xsl:value-of select="LensThickness" />
			</td>
			<td>
				<xsl:value-of select="VitreousThickness" />
			</td>
		</tr>
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="Typical" mode="BIO">
		<tr>
			<th>Typ</th>
			<td>
				<xsl:value-of select="AxialLength" />
			</td>
			<td>
				<xsl:value-of select="ACD" />
			</td>
			<td>
				<xsl:value-of select="LensThickness" />
			</td>
			<td>
				<xsl:value-of select="VitreousThickness" />
			</td>
		</tr>
	</xsl:template>
	
	<!--============================================================================================-->
	<xsl:template match="Image" mode="BIO">
		<tr>
			<td colspan="10" style="background:white">
				<a target="_blank">
					<xsl:attribute name="href">
						<xsl:value-of select="FileName" />
					</xsl:attribute>
					<img border="0" width="290" alt="BIO Wave">
						<xsl:attribute name="src">
							<xsl:value-of select="FileName" />
						</xsl:attribute>
					</img>
				</a>
			</td>
		</tr>
		<tr>
			<td colspan="10" style="background:white;font-size:8pt;word-break:break-all">
				<a title="Ring image" target="_blank">
					<xsl:attribute name="href">
						<xsl:value-of select="FileName" />
					</xsl:attribute>
					<xsl:value-of select="FileName" />
				</a>
			</td>
		</tr>
		<tr>
			<th>Image</th>
			<td colspan="10">
				<xsl:value-of select="FileName/@condition" />
			</td>
		</tr>
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template name="MEASURE_PACHY">
		<tr>
			<th colspan="2" align="center">
				<font size="+3">
					Pachymetry
				</font>
			</th>
		</tr>

		<table border="1" width="600" align="center">
			<colgroup>
				<col span="1" style="background:#E0E0E0" />
			</colgroup>

			<tr>
				<th>Map Name</th>
				<td>
					<xsl:value-of select="MapName" />
				</td>
			</tr>
			<tr>
				<th>Corneal Velocity</th>
				<td>
					<xsl:value-of select="CornealVelocity" />
					<xsl:value-of select="CornealVelocity/@unit" />
				</td>
			</tr>
			<tr>
				<th>Bias</th>
				<td>
					<xsl:value-of select="Bias" />
					<xsl:value-of select="Bias/@unit" />
				</td>
			</tr>
		</table>
		<br />

		<table width="600" align="center" cellpadding="0" cellspacing="0">
			<tr>
				<td style="vertical-align:top">
					<table border="1" width="300" align="center">
						<xsl:apply-templates select="PACHY/R" />
					</table>
					<br />
				</td>
				<td style="vertical-align:top">
					<table border="1" width="300" align="center">
						<xsl:apply-templates select="PACHY/L" />
					</table>
					<br />
				</td>
			</tr>
		</table>

	</xsl:template>
	
	<!--============================================================================================-->
	<xsl:template match="PACHY/R">
		<xsl:call-template name="PACHY_RL" />
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="PACHY/L">
		<xsl:call-template name="PACHY_RL" />
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template name="PACHY_RL">
		<colgroup>
			<col span="1" style="background:#E0E0E0" />
		</colgroup>

		<tr>
			<th>Select Data</th>
			<td colspan="2">
				<xsl:value-of select="SelectData" />
			</td>
		</tr>
		<xsl:apply-templates select="Position" mode="PACHY" />
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="Position" mode="PACHY">
		<tr style="background:silver">
			<th>
				Position
			</th>
			<th colspan="2">
				<xsl:value-of select="@No" />
			</th>
		</tr>

		<tr>
			<th>Probe</th>
			<td colspan="2">
				<xsl:value-of select="Probe" />
			</td>
		</tr>		
		
		<tr>
			<th>Measurement Mode</th>
			<td colspan="2">
				<xsl:value-of select="MeasurementMode" />
			</td>
		</tr>	
		
		<tr>
			<th>Gain</th>
			<td colspan="2">
				<xsl:value-of select="Gain" />
			</td>
		</tr>
	
		<tr style="background:#E0E0E0">
			<th>No</th>
			<th>Thickness</th>
			<th>Bias</th>
		</tr>

		<xsl:apply-templates select="List" mode="PACHY" />
		<xsl:apply-templates select="Average" mode="PACHY" />	
		<xsl:apply-templates select="StandardDeviation" mode="PACHY" />
		<xsl:apply-templates select="Typical" mode="PACHY" />
		<xsl:apply-templates select="Image" mode="PACHY" />
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="List" mode="PACHY">
		<tr>
			<th>
				<xsl:value-of select="@No" />
			</th>
			<td>
				<xsl:value-of select="PachyThickness" />
			</td>
			<td>
				<xsl:value-of select="PachyThicknessBias" />
			</td>
		</tr>		
	</xsl:template>
	
	<!--============================================================================================-->
	<xsl:template match="Average" mode="PACHY">
		<tr>
			<th>Average</th>
			<td>
				<xsl:value-of select="PachyThickness" />
			</td>
			<td>
				<xsl:value-of select="PachyThicknessBias" />
			</td>
		</tr>
	</xsl:template>
	
	<!--============================================================================================-->
	<xsl:template match="StandardDeviation" mode="PACHY">
		<tr>
			<th>Standard Deviation</th>
			<td>
				<xsl:value-of select="PachyThickness" />
			</td>
			<td>
				<xsl:value-of select="PachyThicknessBias" />
			</td>
		</tr>
	</xsl:template>


	<!--============================================================================================-->
	<xsl:template match="Typical" mode="PACHY">
		<tr>
			<th>Typical</th>
			<td>
				<xsl:value-of select="PachyThickness" />
			</td>
			<td>
				<xsl:value-of select="PachyThicknessBias" />
			</td>
		</tr>
	</xsl:template>
	
	<!--============================================================================================-->
	<xsl:template match="Image" mode="PACHY">
		<tr>
			<td colspan="10" style="background:white">
				<a target="_blank">
					<xsl:attribute name="href">
						<xsl:value-of select="FileName" />
					</xsl:attribute>
					<img border="0" width="290" alt="PACHY Wave">
						<xsl:attribute name="src">
							<xsl:value-of select="FileName" />
						</xsl:attribute>
					</img>
				</a>
			</td>
		</tr>
		<tr>
			<td colspan="10" style="background:white;font-size:8pt;word-break:break-all">
				<a title="Ring image" target="_blank">
					<xsl:attribute name="href">
						<xsl:value-of select="FileName" />
					</xsl:attribute>
					<xsl:value-of select="FileName" />
				</a>
			</td>
		</tr>
	</xsl:template>
	
	<!--============================================================================================-->
	<xsl:template name="MEASURE_IOL">
		<tr>
			<th colspan="2" align="center">
				<font size="+3">
					IOL Calculation
				</font>
			</th>
		</tr>
		<tr>
			<td style="vertical-align:top">
				<table border="1" width="300" align="center">
					<xsl:apply-templates select="IOL/R" />
				</table>
				<br />
			</td>
			<td style="vertical-align:top">
				<table border="1" width="300" align="center">
					<xsl:apply-templates select="IOL/L" />
				</table>
				<br />
			</td>
		</tr>

		<tr>
			<table border="1" width="600" align="center">
				<colgroup>
					<col  style="background:#E0E0E0" />
				</colgroup>
				<th>View Pattern</th>
				<td>
					<xsl:value-of select="IOL/ViewPattern" />
				</td>
			</table>
			<br />
		</tr>

		<xsl:apply-templates select="IOL/IOLList" />

	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="IOL/R">
		<xsl:call-template name="IOL_RL" />
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="IOL/L">
		<xsl:call-template name="IOL_RL" />
	</xsl:template>
	
	<!--============================================================================================-->
	<xsl:template name="IOL_RL">

		<colgroup>
			<col span="2" style="background:#E0E0E0" />
		</colgroup>
		<tr>
			<th colspan="2">Select Data AL</th>
			<td colspan="3">
				<xsl:value-of select="SelectData" />
			</td>
		</tr>
		<tr>
			<th colspan="2">Select Data ACD</th>
			<td colspan="3">
				<xsl:value-of select="SelectDataACD" />
			</td>
		</tr>

		<xsl:apply-templates select="Optical" mode="IOL"/>
		<xsl:apply-templates select="Ultrasound" mode="IOL"/>
		<xsl:apply-templates select="KM" mode="IOL"/>
		
		<tr>
			<th colspan="2">Target</th>
			<td colspan="3">
				<xsl:value-of select="Target" />
				<xsl:value-of select="Target/@unit" />
			</td>
		</tr>
		<tr>
			<th colspan="2">Eye Type</th>
			<td colspan="3">
				<xsl:if test="EyeType/@change='on'">#</xsl:if>
				<xsl:value-of select="EyeType" />
			</td>
		</tr>
		<tr>
			<th colspan="2">Refractive Index</th>
			<td colspan="3">
				<xsl:value-of select="RefractiveIndex" />
			</td>
		</tr>

		<xsl:apply-templates select="CamellinCalossi" mode="IOL"/>
		<xsl:apply-templates select="Implant" mode="IOL"/>

	</xsl:template>
	
	<!--============================================================================================-->
	<xsl:template match="Optical" mode="IOL">
		<tr>
			<th rowspan="3">Optical</th>
			<th>AL</th>
			<td colspan="2">
				<xsl:if test="AxialLength/@change='on'">#</xsl:if>
				<xsl:value-of select="AxialLength" />
				<xsl:value-of select="AxialLength/@errordata" />
				<xsl:value-of select="AxialLength/@unit" />
			</td>
			<td>
				<xsl:if test="AxialLengthSNR/@change='on'">#</xsl:if>
				<xsl:value-of select="AxialLengthSNR" />
			</td>

		</tr>
		<tr>
			<th>AL Offset</th>
			<td colspan="3">
				<xsl:if test="AxialLengthOffset/@change='on'">#</xsl:if>
				<xsl:value-of select="AxialLengthOffset" />
				<xsl:value-of select="AxialLengthOffset/@unit" />
			</td>
		</tr>
		<tr>
			<th>ACD</th>
			<td colspan="3">
				<xsl:if test="ACD/@change='on'">#</xsl:if>
				<xsl:value-of select="ACD" />
				<xsl:value-of select="ACD/@errordata" />
				<xsl:value-of select="ACD/@unit" />
			</td>
		</tr>
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="Ultrasound" mode="IOL">
		<tr>
			<th rowspan="5">Ultrasound</th>
			<th>AL</th>
			<td colspan="3">
				<xsl:if test="AxialLength/@change='on'">#</xsl:if>
				<xsl:value-of select="AxialLength" />
				<xsl:value-of select="AxialLength/@errordata" />
				<xsl:value-of select="AxialLength/@unit" />
			</td>

		</tr>
		<tr>
			<th>AL Offset</th>
			<td colspan="3">
				<xsl:if test="AxialLengthOffset/@change='on'">#</xsl:if>
				<xsl:value-of select="AxialLengthOffset" />
				<xsl:value-of select="AxialLengthOffset/@unit" />
			</td>
		</tr>
		<tr>
			<th>ACD</th>
			<td colspan="3">
				<xsl:if test="ACD/@change='on'">#</xsl:if>
				<xsl:value-of select="ACD" />
				<xsl:value-of select="ACD/@errordata" />
				<xsl:value-of select="ACD/@unit" />
			</td>
		</tr>
		<tr>
			<xsl:if test="count(Immersion)!=0">
				<th>Immersion</th>
				<td colspan="3">
					<xsl:value-of select="Immersion" />
				</td>	
			</xsl:if>
		</tr>
		<tr>
			<th>Operator</th>
			<td colspan="3">
				<xsl:value-of select="Operator/ID" />
			</td>
		</tr>
	</xsl:template>
	
	<!--============================================================================================-->
	<xsl:template match="KM" mode="IOL">
		<tr>
			<th rowspan="5">
				KM :<br/>
				<xsl:value-of select="@condition" />
			</th>
			<th><br /></th>
			<th  style="background:#E0E0E0" >mm</th>
			<th  style="background:#E0E0E0" >Diopter</th>
			<th  style="background:#E0E0E0" >Axis</th>
		</tr>

		<tr>
			<th>R1</th>
			<xsl:apply-templates select="R1" mode="KM" />
		</tr>
		<tr>
			<th>R2</th>
			<xsl:apply-templates select="R2" mode="KM" />
		</tr>
		<tr>
			<th>AVG</th>
			<xsl:apply-templates select="Average" mode="KM" />
		</tr>
		<tr>
			<th>CYL</th>
			<xsl:apply-templates select="Cylinder" mode="KM" />
		</tr>

	</xsl:template>
	
	<!--============================================================================================-->
	<xsl:template match="CamellinCalossi" mode="IOL">
		<tr>
			<th rowspan="3">Camellin-Calossi</th>
			<th>Surgery</th>
			<td colspan="3">
				<xsl:value-of select="Sergery" />
			</td>
		</tr>
		<tr>
			<th>SIRC</th>
			<td colspan="3">
				<xsl:if test="SIRC/@change='on'">#</xsl:if>
				<xsl:value-of select="SIRC" />
				<xsl:value-of select="SIRC/@unit" />
			</td>
		</tr>
		<tr>
			<th>Lens Thickness</th>
			<td colspan="3">
				<xsl:if test="LensThickness/@change='on'">#</xsl:if>
				<xsl:value-of select="LensThickness" />
				<xsl:value-of select="LensThickness/@unit" />
			</td>
		</tr>
		
		<xsl:apply-templates select="PachyMap" mode="IOL"/>
	</xsl:template>
	
	<!--============================================================================================-->
	<xsl:template match="PachyMap" mode="IOL">
		<tr>
			<th rowspan="11">Pachy Map</th>
		</tr>
		<xsl:apply-templates select="PachyThickness" mode="IOL"/>
		<xsl:apply-templates select="Diameter" mode="IOL"/>
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="PachyThickness" mode="IOL">
		<tr>
			<th>
				<xsl:value-of select="@No" />
			</th>
			<td colspan="3">
				<xsl:if test="@change='on'">#</xsl:if>
				<xsl:value-of select="." />
				<xsl:value-of select="@unit" />
			</td>
		</tr>
	</xsl:template>
	
	<!--============================================================================================-->
	<xsl:template match="Diameter" mode="IOL">
		<tr>
			<th>Diameter</th>
			<td colspan="3">
				<xsl:if test="@change='on'">#</xsl:if>
				<xsl:value-of select="." />
				<xsl:value-of select="@unit" />
			</td>
		</tr>
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="Implant" mode="IOL">
		<tr>
			<th rowspan="2">Implant IOL</th>
			<th>Power</th>
			<td colspan="3">
				<xsl:value-of select="IOLPower" />
				<xsl:value-of select="IOLPower/@unit" />
			</td>
		</tr>
		<tr>
			<th>List</th>
			<td colspan="3">
				IOL<xsl:value-of select="IOLListNo" />
			</td>
		</tr>
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="IOL/IOLList">
		<table border="1" width="600" align="center">
			
			<colgroup>
				<col span="1" style="background:#E0E0E0" />
			</colgroup>

			<tr>
				<th colspan="4" style="background:silver">
					IOL<xsl:value-of select="@No" />
				</th>
			</tr>
			<tr>
				<th colspan="1">Formula</th>
				<td colspan="2">
					<xsl:value-of select="Formula" />
				</td>
			</tr>
			<tr>
				<th colspan="1">Model Name</th>
				<td colspan="2">
					<xsl:value-of select="ModelName" />
				</td>
			</tr>
			<tr>
				<th colspan="1">Manufacture</th>
				<td colspan="2">
					<xsl:value-of select="Manufacture" />
				</td>
			</tr>
			<tr>
				<th colspan="1">Aconst</th>
				<td colspan="2">
					<xsl:if test="Aconst/@condition='Ultrasound'">u</xsl:if>
					<xsl:if test="Aconst/@change='off'">&#160;</xsl:if>
					<xsl:if test="Aconst/@change='on'">#</xsl:if>
					<xsl:if test="Aconst/@change='optimize'">p</xsl:if>
					<xsl:value-of select="Aconst" />
				</td>
			</tr>
			<tr>
				<th colspan="1">SF</th>
				<td colspan="2">
					<xsl:if test="SF/@condition='Ultrasound'">u</xsl:if>
					<xsl:if test="SF/@change='off'">&#160;</xsl:if>
					<xsl:if test="SF/@change='on'">#</xsl:if>
					<xsl:if test="SF/@change='optimize'">p</xsl:if>
					<xsl:value-of select="SF" />
				</td>
			</tr>
			<tr>
				<th colspan="1">pACD</th>
				<td colspan="2">
					<xsl:if test="pACD/@condition='Ultrasound'">u</xsl:if>
					<xsl:if test="pACD/@change='off'">&#160;</xsl:if>
					<xsl:if test="pACD/@change='on'">#</xsl:if>
					<xsl:if test="pACD/@change='optimize'">p</xsl:if>
					<xsl:value-of select="pACD" />
				</td>
			</tr>
			<tr>
				<th colspan="1">a0</th>
				<td colspan="2">
					<xsl:if test="a0/@condition='Ultrasound'">u</xsl:if>
					<xsl:if test="a0/@change='off'">&#160;</xsl:if>
					<xsl:if test="a0/@change='on'">#</xsl:if>
					<xsl:if test="a0/@change='optimize'">p</xsl:if>
					<xsl:value-of select="a0" />
				</td>
			</tr>
			<tr>
				<th colspan="1">a1</th>
				<td colspan="2">
					<xsl:if test="a1/@condition='Ultrasound'">u</xsl:if>
					<xsl:if test="a1/@change='off'">&#160;</xsl:if>
					<xsl:if test="a1/@change='on'">#</xsl:if>
					<xsl:if test="a1/@change='optimize'">p</xsl:if>
					<xsl:value-of select="a1" />
				</td>
			</tr>
			<tr>
				<th colspan="1">a2</th>
				<td colspan="2">
					<xsl:if test="a2/@condition='Ultrasound'">u</xsl:if>
					<xsl:if test="a2/@change='off'">&#160;</xsl:if>
					<xsl:if test="a2/@change='on'">#</xsl:if>
					<xsl:if test="a2/@change='optimize'">p</xsl:if>
					<xsl:value-of select="a2" />
				</td>
			</tr>
			

			<xsl:apply-templates select="R" mode= "IOL_L"/>
		
			<xsl:apply-templates select="L" mode= "IOL_L"/>

		</table>
		<br/>
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="R" mode="IOL_L">
		<tr>
			<th colspan="3"></th>
		</tr>
		<tr>
			<th colspan="3">Right</th>
		</tr>
		<xsl:call-template name="IOL_L_RL" />
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="L" mode="IOL_L">
		<tr>
			<th colspan="3"></th>
		</tr>
		<tr>
			<th colspan="3">Left</th>
		</tr>
		<xsl:call-template name="IOL_L_RL" />
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template name="IOL_L_RL">
			
			<xsl:if test="count(IOLPower)!=0">
				<tr>
					<th colspan="1">IOL Power</th>
					<td colspan="2">
						<xsl:value-of select="IOLPower" />
						<xsl:value-of select="IOLPower/@unit" />
					</td>
				</tr>
			</xsl:if>

			<xsl:if test="count(List)!=0">
				<tr>
					<th style="background:silver">No</th>
					<th style="background:silver">IOL</th>
					<th style="background:silver">Ref</th>
				</tr>
			</xsl:if>
			<xsl:apply-templates select="List" mode="IOL"/>

	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="List" mode="IOL">
		<tr>
			<th >
				<xsl:value-of select="@No" />

			</th>
			<td>
				<xsl:value-of select="IOLPower" />
			</td>
			<td>
				<xsl:value-of select="RefractivePower" />
			</td>
		</tr>
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template name="MEASURE_TRC">
		<tr>
			<th colspan="2" align="center">
				<font size="+3">
					Toric
				</font>
			</th>
		</tr>
		<tr>
			<td style="vertical-align:top">
				<table border="1" width="300" align="center">
					<xsl:apply-templates select="TRC/R" />
				</table>
				<br />
			</td>
			<td style="vertical-align:top">
				<table border="1" width="300" align="center">
					<xsl:apply-templates select="TRC/L" />
				</table>
				<br />
			</td>
		</tr>
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="TRC/R">
		<xsl:call-template name="TRC_RL" />
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="TRC/L">
		<xsl:call-template name="TRC_RL" />
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template name="TRC_RL">
		<tr style="background:silver">
			<th colspan="2">KM Mire</th>
			<th colspan="3">Steep Meridian</th>
		</tr>
		<tr>	
			<td colspan="2">
				<xsl:value-of select="KMMire" />
			</td>
			<xsl:apply-templates select="Typical" mode="TRC" />
		</tr>

		<colgroup>
			<col span="2" style="background:#E0E0E0" />
		</colgroup>
		<tr style="background:silver">
			<th colspan="2"><br/></th>
			<th>mm</th>
			<th>Diopter</th>
			<th>Axis</th>
		</tr>
		<xsl:apply-templates select="Typical" mode="KM" />
	
		<xsl:apply-templates select="Image" mode="TRC"/>
	</xsl:template>

	<!--============================================================================================-->
	<xsl:template match="Typical" mode="TRC">
		<td colspan="3">
			<xsl:value-of select="SteepMeridianAngle" />
			<xsl:value-of select="SteepMeridianAngle/@unit" />
		</td>
	</xsl:template>
	
	<!--============================================================================================-->
	<xsl:template match="Image" mode = "TRC">
		<tr>
			<td colspan="10" style="background:white">
				<a target="_blank">
					<xsl:attribute name="href">
						<xsl:value-of select="FileName" />
					</xsl:attribute>
					<img border="0" width="290" alt="Toric Image">
						<xsl:attribute name="src">
							<xsl:value-of select="FileName" />
						</xsl:attribute>
					</img>
				</a>
			</td>
		</tr>
		<tr>
			<td colspan="10" style="background:white;font-size:8pt;word-break:break-all">
				<a title="Ring image" target="_blank">
					<xsl:attribute name="href">
						<xsl:value-of select="FileName" />
					</xsl:attribute>
					<xsl:value-of select="FileName" />
				</a>
			</td>
		</tr>
	</xsl:template>

</xsl:stylesheet>
