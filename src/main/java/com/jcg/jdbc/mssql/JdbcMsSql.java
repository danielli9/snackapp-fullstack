package com.jcg.jdbc.mssql;

import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.DriverManager;

import java.sql.ResultSet;
import java.sql.Statement;


public class JdbcMsSql {

    public static Connection connObj;
    public static String JDBC_URL = "jdbc:sqlserver://localhost:1433;databaseName=Snacks;integratedSecurity=true";

    public static void getDbConnection() {

        Statement insertStmt = null;
        Statement selectStmt = null;

        try {
            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
            connObj = DriverManager.getConnection(JDBC_URL);
            if(connObj != null) {
                DatabaseMetaData metaObj = (DatabaseMetaData) connObj.getMetaData();
                System.out.println("Driver Name?= " + metaObj.getDriverName() + ", Driver Version?= " + metaObj.getDriverVersion() + ", Product Name?= " + metaObj.getDatabaseProductName() + ", Product Version?= " + metaObj.getDatabaseProductVersion());

            insertStmt = connObj.createStatement();
            insertStmt.execute("INSERT INTO DBO.SNACKS (NAME, CALORIES, FAT, CARBS, PROTEIN) VALUES ('Donut', 452, 25.0, 51, 4.9)");
            insertStmt.execute("INSERT INTO DBO.SNACKS (NAME, CALORIES, FAT, CARBS, PROTEIN) VALUES ('Frozen yoghurt', 159, 6.0, 24, 4.0)");
            insertStmt.execute("INSERT INTO DBO.SNACKS (NAME, CALORIES, FAT, CARBS, PROTEIN) VALUES ('Eclair', 262, 16.0, 24, 6.0)");
            insertStmt.execute("INSERT INTO DBO.SNACKS (NAME, CALORIES, FAT, CARBS, PROTEIN) VALUES ('Gingerbread', 356, 16.0, 49, 3.9)");
            insertStmt.execute("INSERT INTO DBO.SNACKS (NAME, CALORIES, FAT, CARBS, PROTEIN) VALUES ('Honeycomb', 408, 3.2, 87, 6.5)");
            insertStmt.execute("INSERT INTO DBO.SNACKS (NAME, CALORIES, FAT, CARBS, PROTEIN) VALUES ('Ice cream sandwich', 237, 9.0, 37, 4.3)");

//            selectStmt = connObj.createStatement();
//            ResultSet rs = selectStmt.executeQuery("SELECT * FROM SNACKS WHERE name = 'Donut'");
//            while(rs.next())
//            {
//                System.out.println(rs.getString(1));    //First Column
//                System.out.println(rs.getString(2));    //Second Column
//                System.out.println(rs.getString(3));    //Third Column
//                System.out.println(rs.getString(4));    //Fourth Column
//                System.out.println(rs.getString(5));    //Fifth Column
//            }

            }
        } catch(Exception sqlException) {
            sqlException.printStackTrace();
        }
    }

    public static void main(String[] args) {
        getDbConnection();
    }
}
