// Importing the packages required for the project.  
  
const mysql = require('mysql');  const express = require('express');  var app = express();  const bodyparser = require('body-parser');  
// Used for sending the Json Data to Node API  
app.use(bodyparser.json());  
// Connection String to Database  
var mysqlConnection = mysql.createConnection({  
    host: '127.0.0.1',  
    user : 'root',  
    password : '',   
    database : 'db_clinica_eylinlopez',  
    port:3306,
    multipleStatements : true  
});   
// To check whether the connection is succeed for Failed while running the project in console.  
mysqlConnection.connect((err) => {  
    if(!err) {  
        console.log("Db conexion correctamente");  
    }  
    else{  
        console.log("Db la conexion ha fallado\n Error :" + JSON.stringify(err,undefined,2));  
    }  
});  
// To Run the server with Port Number  
app.listen(4000,()=> console.log("Express servidor esta corriendo en el puerto : 4000")); 

//crud method
app.get('/bienvenido', function(req,res){
    res.send("bienvenido app CLINICA")

})
//get expedientes de LOS pacientes (CONSULTAS DE TODOS LOS PACIENTES)
app.get('/seleccionpaciente',(req,res)=>{  
    mysqlConnection.query('call SP_SELECT_PACIENTES();',(err,rows,fields)=>{  
    if(!err)   
    res.send(rows);  
    else  
        console.log(err);})}); 
//get expedientes de LOS pacientes (CONSULTAS DE TODOS LOS PACIENTES)
app.get('/GET_EXPEDIENTES',(req,res)=>{  
    mysqlConnection.query('call SP_SELECT_EXPEDIENTES();',(err,rows,fields)=>{  
    if(!err)   
    res.send(rows);  
    else  
        console.log(err);})}); 
//get expediente de UN paciente (CONSULTAS DE UN SOLO PACIENTE)
app.get('/GET_EXPEDIENTE_PACIENTE/:COD_CONSULTA',(req,res)=>{  
    mysqlConnection.query('call SP_SELECT_EXPEDIENTE_PACIENTE(?);',[req.params.COD_CONSULTA],(err,rows,fields)=>{  
    if(!err)   
    res.send(rows);  
    else  
        console.log(err);})});  
//Delete the CONSULTA Data based on Id   (EJEMPLO)
app.delete('/DELETE_CONSULTA/:COD_CONSULTA',(req,res)=>{  
    mysqlConnection.query('call SP_DELETE_CONSULTA_PACIENTE(?);',
    [req.params.COD_CONSULTA],(err,rows,fields)=>{  
    if(!err)   
    res.send("Datos borrados correctamente");  
    else  
        console.log(err);})});
//INSERT DATOS DE LA CONSULTA AL PACIENTE
app.post('/INSERT_CONSULTA',(req,res)=>{  
    let consu = req.body;  
    var sql = "SET @COD_PACIENTE=?; SET @TIPO_CONSULTA=?; SET @LUGAR=?; SET @SEGURO_MEDICO=?; SET @ASEGURADORA=?; SET @RELACION_POLIZA=?; SET @ESTATURA=?; SET @SATO2=?; SET @PESO=?; SET @TEMPERATURA=?; SET @PRESIÓN_ALTERIAL=?; SET @FRECUENCIA_CARDIACA=?; SET @FRECUENCIA_RESPIRATORIA=?; SET @NOTAS=?; SET @DESCRIPCION_SIGNOS=?; SET @FECHA_REGISTRO_SIGNOS=? ; SET @CIE=?; SET @NOMBRE_DIAGNOSTICO=?; SET @EQUIVALENCIAS=?; SET @DESCRIPCION_DIAGNOSTICO=?; SET @NOMBRE_EXAMEN=?; SET @ETIQUETAS_EXAMEN=?; SET @CODIGO_EXAMEN=?; SET @MEDICAMENTO=?; SET @MARCA_MEDICAMENTO=?; SET @CANTIDAD_MEDICAMENTO=?; SET @DOSIS_INDICACIONES=?; SET @DESCRIPCION_MEDICAMENTO=?; SET @MENARQUIA=?; SET @EMBARAZOS=?; SET @PLANIFICACION=?; SET @PERIODO_MESTRUAL=?; SET @FECHA_ULTIMA_MESTRU=?; SET @ANTECEDENTE_PATOLOGICO=?; SET @ALERGIAS=?; SET @HABITOS=?; SET @CONSUMO_MEDICAMENTO=?; SET @TIPO_ANTECEDENTE=?; SET @ENFERMEDAD_PATOLOGICA=?; SET @IMAGEN=?; SET @OBSERVACIONES_IMAGEN=?; SET @SUB_TOTAL_FACTURA=?; SET @IMPUESTO=?; SET @TOTAL_FACTURA=?; SET @DESCRIPCION_FACTURA=?;  \ CALL SP_INSERT_CONSULTA(@COD_PACIENTE, @TIPO_CONSULTA, @LUGAR, @SEGURO_MEDICO, @ASEGURADORA, @RELACION_POLIZA, @ESTATURA, @SATO2, @PESO, @TEMPERATURA, @PRESIÓN_ALTERIAL, @FRECUENCIA_CARDIACA, @FRECUENCIA_RESPIRATORIA, @NOTAS, @DESCRIPCION_SIGNOS, @FECHA_REGISTRO_SIGNOS, @CIE, @NOMBRE_DIAGNOSTICO, @EQUIVALENCIAS, @DESCRIPCION_DIAGNOSTICO, @NOMBRE_EXAMEN, @ETIQUETAS_EXAMEN, @CODIGO_EXAMEN, @MEDICAMENTO, @MARCA_MEDICAMENTO, @CANTIDAD_MEDICAMENTO, @DOSIS_INDICACIONES, @DESCRIPCION_MEDICAMENTO, @MENARQUIA, @EMBARAZOS, @PLANIFICACION, @PERIODO_MESTRUAL ,@FECHA_ULTIMA_MESTRU, @ANTECEDENTE_PATOLOGICO, @ALERGIAS, @HABITOS, @CONSUMO_MEDICAMENTO, @TIPO_ANTECEDENTE,@ENFERMEDAD_PATOLOGICA, @IMAGEN, @OBSERVACIONES_IMAGEN, @SUB_TOTAL_FACTURA, @IMPUESTO, @TOTAL_FACTURA, @DESCRIPCION_FACTURA);"  
    mysqlConnection.query(sql,[consu.COD_PACIENTE,consu.TIPO_CONSULTA,consu.LUGAR,consu.SEGURO_MEDICO,consu.ASEGURADORA,consu.RELACION_POLIZA,consu.ESTATURA,consu.SATO2,consu.PESO,consu.TEMPERATURA,consu.PRESIÓN_ALTERIAL,consu.FRECUENCIA_CARDIACA,consu.FRECUENCIA_RESPIRATORIA,consu.NOTAS,consu.DESCRIPCION_SIGNOS,consu.FECHA_REGISTRO_SIGNOS,consu.CIE,consu.NOMBRE_DIAGNOSTICO,consu.EQUIVALENCIAS,consu.DESCRIPCION_DIAGNOSTICO,consu.NOMBRE_EXAMEN,consu.ETIQUETAS_EXAMEN,consu.CODIGO_EXAMEN,consu.MEDICAMENTO,consu.MARCA_MEDICAMENTO,consu.CANTIDAD_MEDICAMENTO,consu.DOSIS_INDICACIONES,consu.DESCRIPCION_MEDICAMENTO,consu.MENARQUIA,consu.EMBARAZOS,consu.PLANIFICACION,consu.PERIODO_MESTRUAL,consu.FECHA_ULTIMA_MESTRU,consu.ANTECEDENTE_PATOLOGICO,consu.ALERGIAS,consu.HABITOS,consu.CONSUMO_MEDICAMENTO,consu.TIPO_ANTECEDENTE,consu.ENFERMEDAD_PATOLOGICA,consu.IMAGEN,consu.OBSERVACIONES_IMAGEN,consu.SUB_TOTAL_FACTURA,consu.IMPUESTO,consu.TOTAL_FACTURA,consu.DESCRIPCION_FACTURA],(err,rows,fields)=>{  
    if(!err)   
    res.send("datos de consulta ingresados correctamente");  
    else  
        console.log(err);})}); 
//INSERT DATOS DE LA CONSULTA -IMAGEN(INGRESAR ADD IMAGEN)
app.post('/INSERT_CONSULTA/ADD_IMAGEN',(req,res)=>{  
    let consu = req.body;  
    var sql = "SET @COD_PACIENTE=?; SET @TIPO_CONSULTA=?; SET @LUGAR=?; SET @SEGURO_MEDICO=?; SET @ASEGURADORA=?; SET @RELACION_POLIZA=?; SET @ESTATURA=?; SET @SATO2=?; SET @PESO=?; SET @TEMPERATURA=?; SET @PRESIÓN_ALTERIAL=?; SET @FRECUENCIA_CARDIACA=?; SET @FRECUENCIA_RESPIRATORIA=?; SET @NOTAS=?; SET @DESCRIPCION_SIGNOS=?; SET @CIE=?; SET @NOMBRE_DIAGNOSTICO=?; SET @EQUIVALENCIAS=?; SET @DESCRIPCION_DIAGNOSTICO=?; SET @NOMBRE_EXAMEN=?; SET @ETIQUETAS_EXAMEN=?; SET @CODIGO_EXAMEN=?; SET @MEDICAMENTO=?; SET @MARCA_MEDICAMENTO=?; SET @CANTIDAD_MEDICAMENTO=?; SET @DOSIS_INDICACIONES=?; SET @DESCRIPCION_MEDICAMENTO=?; SET @MENARQUIA=?; SET @EMBARAZOS=?; SET @PLANIFICACION=?; SET @PERIODO_MESTRUAL=?; SET @FECHA_ULTIMA_MESTRU=?; SET @ANTECEDENTE_PATOLOGICO=?; SET @ALERGIAS=?; SET @HABITOS=?; SET @CONSUMO_MEDICAMENTO=?; SET @TIPO_ANTECEDENTE=?; SET @ENFERMEDAD_PATOLOGICA=?; SET @IMAGEN=?; SET @OBSERVACIONES_IMAGEN=?; SET @SUB_TOTAL_FACTURA=?; SET @IMPUESTO=?; SET @TOTAL_FACTURA=?; SET @DESCRIPCION_FACTURA=?;  \ CALL SP_INSERT_CONSULTA(@COD_PACIENTE, @TIPO_CONSULTA, @LUGAR, @SEGURO_MEDICO, @ASEGURADORA, @RELACION_POLIZA, @ESTATURA, @SATO2, @PESO, @TEMPERATURA, @PRESIÓN_ALTERIAL, @FRECUENCIA_CARDIACA, @FRECUENCIA_RESPIRATORIA, @NOTAS, @DESCRIPCION_SIGNOS, @CIE, @NOMBRE_DIAGNOSTICO, @EQUIVALENCIAS, @DESCRIPCION_DIAGNOSTICO, @NOMBRE_EXAMEN, @ETIQUETAS_EXAMEN, @CODIGO_EXAMEN, @MEDICAMENTO, @MARCA_MEDICAMENTO, @CANTIDAD_MEDICAMENTO, @DOSIS_INDICACIONES, @DESCRIPCION_MEDICAMENTO, @MENARQUIA, @EMBARAZOS, @PLANIFICACION, @PERIODO_MESTRUAL ,@FECHA_ULTIMA_MESTRU, @ANTECEDENTE_PATOLOGICO, @ALERGIAS, @HABITOS, @CONSUMO_MEDICAMENTO, @TIPO_ANTECEDENTE,@ENFERMEDAD_PATOLOGICA, @IMAGEN, @OBSERVACIONES_IMAGEN, @SUB_TOTAL_FACTURA, @IMPUESTO, @TOTAL_FACTURA, @DESCRIPCION_FACTURA);"  
    mysqlConnection.query(sql,[consu.COD_PACIENTE,consu.TIPO_CONSULTA,consu.LUGAR,consu.SEGURO_MEDICO,consu.ASEGURADORA,consu.RELACION_POLIZA,consu.ESTATURA,consu.SATO2,consu.PESO,consu.TEMPERATURA,consu.PRESIÓN_ALTERIAL,consu.FRECUENCIA_CARDIACA,consu.FRECUENCIA_RESPIRATORIA,consu.NOTAS,consu.DESCRIPCION_SIGNOS,consu.CIE,consu.NOMBRE_DIAGNOSTICO,consu.EQUIVALENCIAS,consu.DESCRIPCION_DIAGNOSTICO,consu.NOMBRE_EXAMEN,consu.ETIQUETAS_EXAMEN,consu.CODIGO_EXAMEN,consu.MEDICAMENTO,consu.MARCA_MEDICAMENTO,consu.CANTIDAD_MEDICAMENTO,consu.DOSIS_INDICACIONES,consu.DESCRIPCION_MEDICAMENTO,consu.MENARQUIA,consu.EMBARAZOS,consu.PLANIFICACION,consu.PERIODO_MESTRUAL,consu.FECHA_ULTIMA_MESTRU,consu.ANTECEDENTE_PATOLOGICO,consu.ALERGIAS,consu.HABITOS,consu.CONSUMO_MEDICAMENTO,consu.TIPO_ANTECEDENTE,consu.ENFERMEDAD_PATOLOGICA,consu.IMAGEN,consu.OBSERVACIONES_IMAGEN,consu.SUB_TOTAL_FACTURA,consu.IMPUESTO,consu.TOTAL_FACTURA,consu.DESCRIPCION_FACTURA],(err,rows,fields)=>{  
    if(!err)   
    res.send("datos de imagen ingresados");  
    else  
        console.log(err);})}); 
//INSERT DATOS DE LA CONSULTA -SIGNOS(INGRESAR SEGUIMIENTO DE SIGNOS)
app.post('/INSERT_CONSULTA/ADD_SEGUMIENTO_SIGNOS',(req,res)=>{  
    let consu = req.body;  
    var sql = "SET @COD_PACIENTE=?; SET @TIPO_CONSULTA=?; SET @LUGAR=?; SET @SEGURO_MEDICO=?; SET @ASEGURADORA=?; SET @RELACION_POLIZA=?; SET @ESTATURA=?; SET @SATO2=?; SET @PESO=?; SET @TEMPERATURA=?; SET @PRESIÓN_ALTERIAL=?; SET @FRECUENCIA_CARDIACA=?; SET @FRECUENCIA_RESPIRATORIA=?; SET @NOTAS=?; SET @DESCRIPCION_SIGNOS=?; SET @CIE=?; SET @NOMBRE_DIAGNOSTICO=?; SET @EQUIVALENCIAS=?; SET @DESCRIPCION_DIAGNOSTICO=?; SET @NOMBRE_EXAMEN=?; SET @ETIQUETAS_EXAMEN=?; SET @CODIGO_EXAMEN=?; SET @MEDICAMENTO=?; SET @MARCA_MEDICAMENTO=?; SET @CANTIDAD_MEDICAMENTO=?; SET @DOSIS_INDICACIONES=?; SET @DESCRIPCION_MEDICAMENTO=?; SET @MENARQUIA=?; SET @EMBARAZOS=?; SET @PLANIFICACION=?; SET @PERIODO_MESTRUAL=?; SET @FECHA_ULTIMA_MESTRU=?; SET @ANTECEDENTE_PATOLOGICO=?; SET @ALERGIAS=?; SET @HABITOS=?; SET @CONSUMO_MEDICAMENTO=?; SET @TIPO_ANTECEDENTE=?; SET @ENFERMEDAD_PATOLOGICA=?; SET @IMAGEN=?; SET @OBSERVACIONES_IMAGEN=?; SET @SUB_TOTAL_FACTURA=?; SET @IMPUESTO=?; SET @TOTAL_FACTURA=?; SET @DESCRIPCION_FACTURA=?;  \ CALL SP_INSERT_CONSULTA(@COD_PACIENTE, @TIPO_CONSULTA, @LUGAR, @SEGURO_MEDICO, @ASEGURADORA, @RELACION_POLIZA, @ESTATURA, @SATO2, @PESO, @TEMPERATURA, @PRESIÓN_ALTERIAL, @FRECUENCIA_CARDIACA, @FRECUENCIA_RESPIRATORIA, @NOTAS, @DESCRIPCION_SIGNOS, @CIE, @NOMBRE_DIAGNOSTICO, @EQUIVALENCIAS, @DESCRIPCION_DIAGNOSTICO, @NOMBRE_EXAMEN, @ETIQUETAS_EXAMEN, @CODIGO_EXAMEN, @MEDICAMENTO, @MARCA_MEDICAMENTO, @CANTIDAD_MEDICAMENTO, @DOSIS_INDICACIONES, @DESCRIPCION_MEDICAMENTO, @MENARQUIA, @EMBARAZOS, @PLANIFICACION, @PERIODO_MESTRUAL ,@FECHA_ULTIMA_MESTRU, @ANTECEDENTE_PATOLOGICO, @ALERGIAS, @HABITOS, @CONSUMO_MEDICAMENTO, @TIPO_ANTECEDENTE,@ENFERMEDAD_PATOLOGICA, @IMAGEN, @OBSERVACIONES_IMAGEN, @SUB_TOTAL_FACTURA, @IMPUESTO, @TOTAL_FACTURA, @DESCRIPCION_FACTURA);"  
    mysqlConnection.query(sql,[consu.COD_PACIENTE,consu.TIPO_CONSULTA,consu.LUGAR,consu.SEGURO_MEDICO,consu.ASEGURADORA,consu.RELACION_POLIZA,consu.ESTATURA,consu.SATO2,consu.PESO,consu.TEMPERATURA,consu.PRESIÓN_ALTERIAL,consu.FRECUENCIA_CARDIACA,consu.FRECUENCIA_RESPIRATORIA,consu.NOTAS,consu.DESCRIPCION_SIGNOS,consu.CIE,consu.NOMBRE_DIAGNOSTICO,consu.EQUIVALENCIAS,consu.DESCRIPCION_DIAGNOSTICO,consu.NOMBRE_EXAMEN,consu.ETIQUETAS_EXAMEN,consu.CODIGO_EXAMEN,consu.MEDICAMENTO,consu.MARCA_MEDICAMENTO,consu.CANTIDAD_MEDICAMENTO,consu.DOSIS_INDICACIONES,consu.DESCRIPCION_MEDICAMENTO,consu.MENARQUIA,consu.EMBARAZOS,consu.PLANIFICACION,consu.PERIODO_MESTRUAL,consu.FECHA_ULTIMA_MESTRU,consu.ANTECEDENTE_PATOLOGICO,consu.ALERGIAS,consu.HABITOS,consu.CONSUMO_MEDICAMENTO,consu.TIPO_ANTECEDENTE,consu.ENFERMEDAD_PATOLOGICA,consu.IMAGEN,consu.OBSERVACIONES_IMAGEN,consu.SUB_TOTAL_FACTURA,consu.IMPUESTO,consu.TOTAL_FACTURA,consu.DESCRIPCION_FACTURA],(err,rows,fields)=>{  
    if(!err)   
    res.send("datos de signos ingresados");  
    else  
        console.log(err);})}); 
//INSERT DATOS DE LA CONSULTA -SIGNOS(INGRESAR SEGUIMIENTO DE SIGNOS)
app.post('/INSERT_CONSULTA/ADD_DIAGNOSTICO',(req,res)=>{  
    let consu = req.body;  
    var sql = "SET @COD_PACIENTE=?; SET @TIPO_CONSULTA=?; SET @LUGAR=?; SET @SEGURO_MEDICO=?; SET @ASEGURADORA=?; SET @RELACION_POLIZA=?; SET @ESTATURA=?; SET @SATO2=?; SET @PESO=?; SET @TEMPERATURA=?; SET @PRESIÓN_ALTERIAL=?; SET @FRECUENCIA_CARDIACA=?; SET @FRECUENCIA_RESPIRATORIA=?; SET @NOTAS=?; SET @DESCRIPCION_SIGNOS=?; SET @CIE=?; SET @NOMBRE_DIAGNOSTICO=?; SET @EQUIVALENCIAS=?; SET @DESCRIPCION_DIAGNOSTICO=?; SET @NOMBRE_EXAMEN=?; SET @ETIQUETAS_EXAMEN=?; SET @CODIGO_EXAMEN=?; SET @MEDICAMENTO=?; SET @MARCA_MEDICAMENTO=?; SET @CANTIDAD_MEDICAMENTO=?; SET @DOSIS_INDICACIONES=?; SET @DESCRIPCION_MEDICAMENTO=?; SET @MENARQUIA=?; SET @EMBARAZOS=?; SET @PLANIFICACION=?; SET @PERIODO_MESTRUAL=?; SET @FECHA_ULTIMA_MESTRU=?; SET @ANTECEDENTE_PATOLOGICO=?; SET @ALERGIAS=?; SET @HABITOS=?; SET @CONSUMO_MEDICAMENTO=?; SET @TIPO_ANTECEDENTE=?; SET @ENFERMEDAD_PATOLOGICA=?; SET @IMAGEN=?; SET @OBSERVACIONES_IMAGEN=?; SET @SUB_TOTAL_FACTURA=?; SET @IMPUESTO=?; SET @TOTAL_FACTURA=?; SET @DESCRIPCION_FACTURA=?; \ CALL SP_INSERT_CONSULTA(@COD_PACIENTE, @TIPO_CONSULTA, @LUGAR, @SEGURO_MEDICO, @ASEGURADORA, @RELACION_POLIZA, @ESTATURA, @SATO2, @PESO, @TEMPERATURA, @PRESIÓN_ALTERIAL, @FRECUENCIA_CARDIACA, @FRECUENCIA_RESPIRATORIA, @NOTAS, @DESCRIPCION_SIGNOS, @CIE, @NOMBRE_DIAGNOSTICO, @EQUIVALENCIAS, @DESCRIPCION_DIAGNOSTICO, @NOMBRE_EXAMEN, @ETIQUETAS_EXAMEN, @CODIGO_EXAMEN, @MEDICAMENTO, @MARCA_MEDICAMENTO, @CANTIDAD_MEDICAMENTO, @DOSIS_INDICACIONES, @DESCRIPCION_MEDICAMENTO, @MENARQUIA, @EMBARAZOS, @PLANIFICACION, @PERIODO_MESTRUAL ,@FECHA_ULTIMA_MESTRU, @ANTECEDENTE_PATOLOGICO, @ALERGIAS, @HABITOS, @CONSUMO_MEDICAMENTO, @TIPO_ANTECEDENTE,@ENFERMEDAD_PATOLOGICA, @IMAGEN, @OBSERVACIONES_IMAGEN, @SUB_TOTAL_FACTURA, @IMPUESTO, @TOTAL_FACTURA, @DESCRIPCION_FACTURA);"  
    mysqlConnection.query(sql,[consu.COD_PACIENTE,consu.TIPO_CONSULTA,consu.LUGAR,consu.SEGURO_MEDICO,consu.ASEGURADORA,consu.RELACION_POLIZA,consu.ESTATURA,consu.SATO2,consu.PESO,consu.TEMPERATURA,consu.PRESIÓN_ALTERIAL,consu.FRECUENCIA_CARDIACA,consu.FRECUENCIA_RESPIRATORIA,consu.NOTAS,consu.DESCRIPCION_SIGNOS,consu.CIE,consu.NOMBRE_DIAGNOSTICO,consu.EQUIVALENCIAS,consu.DESCRIPCION_DIAGNOSTICO,consu.NOMBRE_EXAMEN,consu.ETIQUETAS_EXAMEN,consu.CODIGO_EXAMEN,consu.MEDICAMENTO,consu.MARCA_MEDICAMENTO,consu.CANTIDAD_MEDICAMENTO,consu.DOSIS_INDICACIONES,consu.DESCRIPCION_MEDICAMENTO,consu.MENARQUIA,consu.EMBARAZOS,consu.PLANIFICACION,consu.PERIODO_MESTRUAL,consu.FECHA_ULTIMA_MESTRU,consu.ANTECEDENTE_PATOLOGICO,consu.ALERGIAS,consu.HABITOS,consu.CONSUMO_MEDICAMENTO,consu.TIPO_ANTECEDENTE,consu.ENFERMEDAD_PATOLOGICA,consu.IMAGEN,consu.OBSERVACIONES_IMAGEN,consu.SUB_TOTAL_FACTURA,consu.IMPUESTO,consu.TOTAL_FACTURA,consu.DESCRIPCION_FACTURA],(err,rows,fields)=>{  
    if(!err)   
    res.send("datos del diagnostico ingresados");  
    else  
        console.log(err);})}); 
//Update an CONSULTA
app.put('/UPDATE_CONSULTA_PACIENTE',(req,res)=>{  
    let c = req.body;  
    var sql = "SET @COD_CONSULTA=?; SET @TIPO_CONSULTA=?;SET @LUGAR=?; SET @SEGURO_MEDICO=?; SET @ASEGURADORA=?; SET @RELACION_POLIZA=?; SET @ESTATURA=?; SET @SATO2=?; SET @PESO=?; SET @TEMPERATURA=?; SET @PRESIÓN_ALTERIAL=?; SET @FRECUENCIA_CARDIACA=?; SET @FRECUENCIA_RESPIRATORIA=?; SET @NOTAS=?; SET @DESCRIPCION_SIGNOS=?; SET @CIE=?; SET @NOMBRE_DIAGNOSTICO=?; SET @EQUIVALENCIAS=?; SET @DESCRIPCION_CIE=?; SET @MEDICAMENTO=?; SET @MARCA=?; SET @CANTIDAD=?; SET @DOSIS_MEDICAMENTO=?; SET @DESCRIPCION_TRATAMIENTO=?; SET @NOMBRE_EXAMEN=?; SET @ETIQUETAS=?; SET @CODIGO=?; SET @MENARQUIA=?; SET @EMABARAZOS=?; SET @PLANIFICACION=?; SET @PERIODO_MESTRUAL=?; SET @FECHA_ULTIMA_MESTRU=?; SET @ANT_PATOLOGICO=?; SET @TIPO_ANTECEDENTE=?; SET @ENFERMEDAD=?; SET @ALERGIAS=?; SET @HABITOS=?; SET @CONSUMO_MEDICAMENTO=?; SET @IMAGEN=?; SET @OBSERVACIONES_IMAGEN=?; SET @SUB_TOTAL=?;SET @IMPUESTO=?; SET @TOTAL=?; SET @DESCRIPCION_PAGO=?;\ CALL SP_UPDATE_CONSULTA(@COD_CONSULTA ,@TIPO_CONSULTA, @LUGAR, @SEGURO_MEDICO, @ASEGURADORA, @RELACION_POLIZA, @ESTATURA, @SATO2, @PESO, @TEMPERATURA, @PRESIÓN_ALTERIAL, @FRECUENCIA_CARDIACA, @FRECUENCIA_RESPIRATORIA, @NOTAS, @DESCRIPCION_SIGNOS, @CIE, @NOMBRE_DIAGNOSTICO, @EQUIVALENCIAS, @DESCRIPCION_CIE, @MEDICAMENTO, @MARCA, @CANTIDAD, @DOSIS_MEDICAMENTO, @DESCRIPCION_TRATAMIENTO, @NOMBRE_EXAMEN, @ETIQUETAS, @CODIGO, @MENARQUIA, @EMABARAZOS, @PLANIFICACION, @PERIODO_MESTRUAL, @FECHA_ULTIMA_MESTRU, @ANT_PATOLOGICO, @TIPO_ANTECEDENTE, @ENFERMEDAD, @ALERGIAS, @HABITOS, @CONSUMO_MEDICAMENTO, @IMAGEN, @OBSERVACIONES_IMAGEN, @SUB_TOTAL, @IMPUESTO, @TOTAL, @DESCRIPCION_PAGO);"  
    mysqlConnection.query(sql,[c.COD_CONSULTA,c.TIPO_CONSULTA,c.LUGAR,c.SEGURO_MEDICO,c.ASEGURADORA,c.RELACION_POLIZA,c.ESTATURA,c.SATO2,c.PESO,c.TEMPERATURA,c.PRESIÓN_ALTERIAL,c.FRECUENCIA_CARDIACA,c.FRECUENCIA_RESPIRATORIA,c.NOTAS,c.DESCRIPCION_SIGNOS,c.CIE,c.NOMBRE_DIAGNOSTICO,c.EQUIVALENCIAS,c.DESCRIPCION_CIE,c.MEDICAMENTO,c.MARCA,c.CANTIDAD,c.DOSIS_MEDICAMENTO,c.DESCRIPCION_TRATAMIENTO,c.NOMBRE_EXAMEN,c.ETIQUETAS,c.CODIGO,c.MENARQUIA,c.EMABARAZOS,c.PLANIFICACION,c.PERIODO_MESTRUAL,c.FECHA_ULTIMA_MESTRU,c.ANT_PATOLOGICO,c.TIPO_ANTECEDENTE,c.ENFERMEDAD,c.ALERGIAS,c.HABITOS,c.CONSUMO_MEDICAMENTO,c.IMAGEN,c.OBSERVACIONES_IMAGEN,c.SUB_TOTAL,c.IMPUESTO,c.TOTAL,c.DESCRIPCION_PAGO],(err,rows,fields)=>{  
    if(!err)   
    res.send("ACTUALIZADO CORRECTAMENTE");  
    else  
        console.log(err);})}); 
//Get all Pacientes con su encargado 
app.get('/GetpacientesEnc',(req,res)=>{  
    mysqlConnection.query('CALL SP_SELECT_PACIENTE_ENCARGADO_DEPARTAMENTO;',(err,rows,fields)=>{  
    if(!err)    
    res.send(rows);  
    else  
        console.log(err);})});  


//Get all Pacientes con su encargado 
app.get('/GetpacientesEnc',(req,res)=>{  
    mysqlConnection.query('CALL SP_SELECT_PACIENTE_ENCARGADO_DEPARTAMENTO;',(err,rows,fields)=>{  
    if(!err)    
    res.send(rows);  
    else  
        console.log(err);})});  
//Get all Paciente con el encargado 
app.get('/GetpacientesEn/:id',(req,res)=>{  
    mysqlConnection.query('CALL SP_SELECT_PACIENTE_ENCARGADO_DEPARTAMENTO2(?);',[req.params.id],(err,rows,fields)=>{  
    if(!err)    
    res.send(rows);  
    else  
        console.log(err);})});  
//Insert PACIENTE-ENCARGADO 
app.post('/InsertpacienteEnc',(req,res)=>{  
    let emp = req.body;  
    var sql = "SET @PRI_NOMBRE = ?;SET @SEG_NOMBRE = ?;SET @PRI_APELLIDO = ?;SET @SEG_APELLIDO = ?;SET @GENERO = ?;SET @FECHA_NACIMIENTO = ?;SET @EDAD = ?;SET @TIPO_ID = ?; SET @NUMERO_ID = ?; SET @ACTIVO_INACTIVO = ?; SET @CORREO = ?; SET @TELEFONO_PAC = ?; SET @DIRECCION = ?; SET @DEPARTAMENTO = ?; SET @IDENTIFICACION = ?;SET @NOM_ENCARGADO = ?;SET @TELEFONO = ?;SET @PARENTESCO = ?;\ CALL SP_INSERT_PACIENTE_ENCARGADO_DEPARTAMENTO(@PRI_NOMBRE,@SEG_NOMBRE,@PRI_APELLIDO,@SEG_APELLIDO,@GENERO,@FECHA_NACIMIENTO,@EDAD,@TIPO_ID,@NUMERO_ID,@ACTIVO_INACTIVO,@CORREO,@TELEFONO_PAC,@DIRECCION,@DEPARTAMENTO,@IDENTIFICACION,@NOM_ENCARGADO,@TELEFONO,@PARENTESCO);"
               mysqlConnection.query(sql,[emp.PRI_NOMBRE,emp.SEG_NOMBRE,emp.PRI_APELLIDO,emp.SEG_APELLIDO,emp.GENERO,emp.FECHA_NACIMIENTO,emp.EDAD,emp.TIPO_ID,emp.NUMERO_ID,emp.ACTIVO_INACTIVO,emp.CORREO,emp.TELEFONO_PAC,emp.DIRECCION,emp.DEPARTAMENTO,emp.IDENTIFICACION,emp.NOM_ENCARGADO,emp.TELEFONO,emp.PARENTESCO],(err,rows,fields)=>{  
       if(!err)   
           res.send("Agregado Exitosamente");  
       else  
            console.log(err);})});  
//Update PACIENTE-ENCARGADO
app.put('/UpdatePacienteEnc',(req,res)=>{  
    let emp = req.body;  
    var sql = "SET @COD_PACIENTE = ?;SET @PRI_NOMBRE = ?;SET @SEG_NOMBRE = ?;SET @PRI_APELLIDO = ?;SET @SEG_APELLIDO = ?;SET @GENERO = ?;SET @FECHA_NACIMIENTO = ?;SET @EDAD = ?; SET @TIPO_ID = ?; SET @NUMERO_ID = ?; SET @ACTIVO_INACTIVO = ?; SET @CORREO = ?; SET @TELEFONO_PAC = ?; SET @DIRECCION = ?;SET @DEPARTAMENTO = ?;SET @NOM_ENCARGADO = ?; SET @PARENTESCO = ?;SET @IDENTIFICACION = ?;SET @TELEFONO = ?;\ CALL SP_UPDATE_PACIENTE_ENCARGADO(@COD_PACIENTE,@PRI_NOMBRE,@SEG_NOMBRE,@PRI_APELLIDO,@SEG_APELLIDO,@GENERO,@FECHA_NACIMIENTO,@EDAD,@TIPO_ID,@NUMERO_ID,@ACTIVO_INACTIVO,@CORREO,@TELEFONO_PAC,@DIRECCION,@DEPARTAMENTO,@NOM_ENCARGADO,@PARENTESCO,@IDENTIFICACION,@TELEFONO);"
           mysqlConnection.query(sql,[emp.COD_PACIENTE,emp.PRI_NOMBRE,emp.SEG_NOMBRE,emp.PRI_APELLIDO,emp.SEG_APELLIDO,emp.GENERO,emp.FECHA_NACIMIENTO,emp.EDAD,emp.TIPO_ID,emp.NUMERO_ID,emp.ACTIVO_INACTIVO,emp.CORREO,emp.TELEFONO_PAC,emp.DIRECCION,emp.DEPARTAMENTO,emp.NOM_ENCARGADO,emp.PARENTESCO,emp.IDENTIFICACION,emp.TELEFONO],(err,rows,fields)=>{  
        if(!err)   
            res.send("Actualizado Exitosamente");  
        else  
             console.log(err);})}); 
//DELETE all Paciente con el Encargado 
app.delete('/DELETEpacientesEnc/:id',(req,res)=>{  
    mysqlConnection.query('CALL SP_DELETE_PACIENTE_ENCARGADO(?);',[req.params.id],(err,rows,fields)=>{  
    if(!err)    
    res.send("Eliminado Exitosamente");  
    else  
        console.log(err);})});
//Busqueda de un solo usuario listo
app.get('/GETUSUARIO',(req,res)=>{  
    let a = req.body;  
    var sql = "SET @NOM_USUARIO = ?;\ CALL SP_SELECT_USUARIO(@NOM_USUARIO);"
    mysqlConnection.query(sql,[a.NOM_USUARIO],(err,rows,fields)=>{  
    if(!err)    
    res.send(rows);  
    else  
        console.log(err);})});  
//INSERT USUARIO
app.post('/POSTUSUARIO',(req,res)=>{  
    let a = req.body;  
    var sql = "SET @NOM_USUARIO = ?;SET @TIPO_USUARIO = ?;SET @CONTRASEÑA = ?;SET @CORREO = ?;\ CALL SP_INSERT_USUARIO(@NOM_USUARIO,@TIPO_USUARIO,@CONTRASEÑA,@CORREO);"  
     mysqlConnection.query(sql,[a.NOM_USUARIO,a.TIPO_USUARIO,a.CONTRASEÑA,a.CORREO,],(err,rows,fields)=>{  
      if(!err)   {
        res.send("Registrado correctamente");
      }else{
        console.log(err);}})}); 
//DELETE USUARIO
app.delete('/deleteusuarios',(req,res)=>{  
    let a = req.body;  
    var sql = "SET @COD_USUARIO = ?;\ CALL SP_DELETE_USUARIO(@COD_USUARIO);"  
    mysqlConnection.query(sql,[a.COD_USUARIO],(err,rows,fields)=>{  
    if(!err) {  
        res.send("Borrado completo");  
    }else{
        console.log(err);}})}); 
//ACTUALIZACION USUARIO
app.put('/PUTUSUARIO',(req,res)=>{  
    let a = req.body;  
    var sql = "SET @COD_USUARIO = ?; SET @NOM_USUARIO = ?;SET @TIPO_USUARIO = ?;SET @CONTRASEÑA = ?;SET @CORREO = ?;\ CALL SP_UPDATE_USUARIO(@COD_USUARIO,@NOM_USUARIO,@TIPO_USUARIO,@CONTRASEÑA,@CORREO)"  
     mysqlConnection.query(sql,[a.COD_USUARIO,a.NOM_USUARIO,a.TIPO_USUARIO,a.CONTRASEÑA,a.CORREO],(err,rows,fields)=>{  
      if(!err)   {
        res.send("Actualizado Correctamente");
      }else{
        console.log(err);}})}); 
//BUSQUEDA DE TODAS LAS CITAS LISTO
app.get('/GETCITAS',(req,res)=>{  
    mysqlConnection.query('CALL SP_SELECT_CITAS;',(err,rows,fields)=>{  
    if(!err)    
    res.send(rows);  
    else  
        console.log(err);})});  
// BUSQUEDA DE CITA POR COD DE CITA ESPECIFICO LISTO
app.get('/GETCITA',(req,res)=>{  
    let a = req.body;  
    var sql = "SET @COD_CITA = ?;\ CALL SP_SELECT_CITA(@COD_CITA);"  
    mysqlConnection.query(sql,[a.COD_CITA],(err,rows,fields)=>{  
    if(!err) {  
        res.send(rows);  
    }else{
        console.log(err);}})}); 
// BUSQUEDA DE LAS CITAS PO COD PACIENTE ESPECIFICO LISTO
app.get('/GETCITAPACIENTE',(req,res)=>{  
  let a = req.body;  
  var sql = "SET @COD_PACIENTE = ?;\ CALL SP_SELECT_CITA_PACIENTE(@COD_PACIENTE);"  
  mysqlConnection.query(sql,[a.COD_PACIENTE],(err,rows,fields)=>{  
  if(!err) {  
      res.send(rows);  
  }else{
      console.log(err);}})}); 
//BUQUEDA DE CITA POR RANDO DE FECHAS LISTO
app.get('/GETCITARANGO',(req,res)=>{  
  let a = req.body;  
    var sql = "SET @FECHA_DESDE = ?; SET @FECHA_HASTA = ?;\ CALL SP_SELECT_CITA_RANGO_FECHA(@FECHA_DESDE, @FECHA_HASTA);"  
     mysqlConnection.query(sql,[a.FECHA_DESDE,a.FECHA_HASTA],(err,rows,fields)=>{  
      if(!err)   {
        res.send(rows);
      }else{
        console.log(err);}})});  
//INSERT DE CITAS LISTO
app.post('/POSTCITA',(req,res)=>{  
    let a = req.body;  
    var sql = "SET @NUMERO_ID = ?; SET @ASUNTO_NOMBRE = ?; SET @LUGAR_CLINICA = ?; SET @FECHA_INICIO = ?; SET @FECHA_FIN = ?; SET @ESTADO_CITA = ?;\ CALL SP_INSERT_CITA(@NUMERO_ID, @ASUNTO_NOMBRE, @LUGAR_CLINICA, @FECHA_INICIO, @FECHA_FIN, @ESTADO_CITA);"  
     mysqlConnection.query(sql,[a.NUMERO_ID,a.ASUNTO_NOMBRE,a.LUGAR_CLINICA,a.FECHA_INICIO,a.FECHA_FIN, a.ESTADO_CITA],(err,rows,fields)=>{  
      if(!err)   {
        res.send("Registrado Exitosamente");
      }else{
        console.log(err); 
      }})}); 
//DELETE CITA POR COD DE CITA LISTO
app.delete('/DELETECITA',(req,res)=>{  
    let a = req.body;  
    var sql = "SET @COD_CITA = ?;\ CALL SP_DELETE_CITA(@COD_CITA);"  
    mysqlConnection.query(sql,[a.COD_CITA],(err,rows,fields)=>{  
    if(!err) {  
        res.send("Borrado completo");  
    }else{
        console.log(err);}})}); 

 //DELETE all cita con 
 app.delete('/DELETECITA/:id',(req,res)=>{  
    mysqlConnection.query('CALL SP_DELETE_CITA(?);',[req.params.id],(err,rows,fields)=>{  
    if(!err)    
    res.send("Eliminado Exitosamente");  
    else  
        console.log(err);})});


         // BUSQUEDA DE CITA POR COD DE CITA ESPECIFICO LISTO
app.get('/GETCITA/:id',(req,res)=>{  
    mysqlConnection.query('CALL SP_SELECT_CITA(?);',[req.params.id],(err,rows,fields)=>{  
    if(!err) {  
        res.send(rows);  
    }else{
        console.log(err);}})}); 



        //ACTUALIZACION DE CITA LISTA
app.put('/PUTCITA',(req,res)=>{  
    let a = req.body;  
    var sql = "SET @COD_CITA = ?; SET @NUMERO_ID = ?; SET @ASUNTO_NOMBRE = ?; SET @LUGAR_CLINICA = ?; SET @FECHA_INICIO = ?; SET @FECHA_FIN = ?; SET @ESTADO_CITA = ?;\ CALL SP_UPDATE_CITA(@COD_CITA, @NUMERO_ID, @ASUNTO_NOMBRE, @LUGAR_CLINICA, @FECHA_INICIO, @FECHA_FIN, @ESTADO_CITA);"  
     mysqlConnection.query(sql,[a.COD_CITA,a.NUMERO_ID,a.ASUNTO_NOMBRE,a.LUGAR_CLINICA,a.FECHA_INICIO,a.FECHA_FIN, a.ESTADO_CITA],(err,rows,fields)=>{  
      if(!err)   {
        res.send("Actualizado Exitosamente");
      }else{
        console.log(err);}})}); 
//INSERTAR DE CLINICA
app.post('/POSTCLINICA',(req,res)=>{  
    let a = req.body;  
      var sql = "SET @NOM_CLINICA = ?; SET @HORARIO_CLINICA = ?;  SET @TELEFONO_CLINICA = ?;  SET @UBICACION_CLI = ?;  SET @RTN_CLINICA = ?; SET @RED_SOCIAL = ?; SET @LOGO_CLINICA = ?; SET @FECHA_REGISTRO = ?; SET @COD_CAI = ?;\ CALL SP_INSERT_CLINICA(@NOM_CLINICA, @HORARIO_CLINICA,  @TELEFONO_CLINICA ,  @UBICACION_CLI, @RTN_CLINICA, @RED_SOCIAL, @LOGO_CLINICA, @FECHA_REGISTRO, @COD_CAI);"  
       mysqlConnection.query(sql,[a.NOM_CLINICA,a.HORARIO_CLINICA,a.TELEFONO_CLINICA, a.UBICACION_CLI, a.RTN_CLINICA, a.RED_SOCIAL, a.LOGO_CLINICA,a.FECHA_REGISTRO, a.COD_CAI],(err,rows,fields)=>{  
        if(!err)   {
          res.send("REGISTRADO EXITOSAMENTE");
        }else{
          console.log(err);}})});  
//INSERTAR DE CAI
  app.post('/POSTLEG',(req,res)=>{  
    let a = req.body;  
      var sql = "SET @NOMBRE_CAI = ?; SET @FECHA_INICIAL = ?;  SET @FECHA_FINAL = ?;  SET @RAN_INICIAL= ?;  SET @RAN_FINAL = ?; SET @ESTADO_CAI = ?;\ CALL SP_INSERT_LEG_TRIBUTARIA(@NOMBRE_CAI, @FECHA_INICIAL,  @FECHA_FINAL ,  @RAN_INICIAL, @RAN_FINAL, @ESTADO_CAI);"  
       mysqlConnection.query(sql,[a.NOMBRE_CAI,a.FECHA_INICIAL,a.FECHA_FINAL, a.RAN_INICIAL, a.RAN_FINAL, a.ESTADO_CAI],(err,rows,fields)=>{  
        if(!err)   {
          res.send("REGISTRADO EXITOSAMENTE");
        }else{
          console.log(err);}})});  
  //BUSCAR DE CLINICA 
  app.get('/GETCLINICA',(req,res)=>{  
    mysqlConnection.query('CALL SP_SELECT_CLINICA;',(err,rows,fields)=>{  
    if(!err)    
    res.send(rows);  
    else  
        console.log(err);})});  
//BUSCAR DE CLINICA POR EL CODIGO
app.get('/GETCLINICACODIGO',(req,res)=>{  
  let a = req.body;  
  var sql = "SET @COD_CLINICA = ?;\ CALL SP_SELECT_CLIN_CODIGO(@COD_CLINICA);"  
  mysqlConnection.query(sql,[a.COD_CLINICA],(err,rows,fields)=>{  
  if(!err) {  
      res.send(rows);  
  }else{
      console.log(err);}})}); 
//DELETE CLINICA
app.delete('/DELETECLINICA',(req,res)=>{  
  let a = req.body;  
  var sql = "SET @COD_CLINICA = ?;\ CALL SP_DELETE_CLINICA(@COD_CLINICA);"  
  mysqlConnection.query(sql,[a.COD_CLINICA],(err,rows,fields)=>{  
  if(!err) {  
      res.send("Borrado completo");  
  }else{
      console.log(err);}})}); 
//DELETE CAI
app.delete('/DELETECAI',(req,res)=>{  
  let a = req.body;  
  var sql = "SET @COD_CAI = ?;\ CALL SP_DELETE_CAI(@COD_CAI);"  
  mysqlConnection.query(sql,[a.COD_CAI],(err,rows,fields)=>{  
  if(!err) {  
      res.send("Borrado completo");  
  }else{
      console.log(err);}})}); 