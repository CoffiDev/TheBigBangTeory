<%-- 
    Document   : Sesion
    Created on : 21/05/2014, 11:55:06 PM
    Author     : Alejandro
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="Clases.mysql" %> 


<%
   // out.println("hola");
    mysql sql = new mysql();
    
    sql.Iniciar("", "", "");
    
    HttpSession sesion = request.getSession();
    
    String act = request.getParameter("act");
   
   if(act.equals("2"))
   {
       //out.println("Iniciar Sesion");
        String usuario = request.getParameter("correo");
        String contraseña = request.getParameter("contra");
        
        sesion.setAttribute("nombre", sql.getNombrePI(usuario));
        out.println(sql.IniciarSesion(usuario, contraseña));
        //+sesion.getAttribute("nombre"));
       
   }
   if(act.equals("4"))
   {
       out.println(sesion.getAttribute("nombre"));
   }
    if(act.equals("1"))
    {
        //out.println("holaa");
        
        String usuario = request.getParameter("correoreg");
        String contraseña = request.getParameter("contrareg");
        String nombre = request.getParameter("nom");
        out.println("hola  "+sql.altaUserPI(usuario, contraseña,nombre));
       // out.println("holaaa   "+ usuario+"      "+contraseña);
                
    }
   
    if(act.equals("3"))
    {
        sesion.invalidate();
    }
       
   
           
%>