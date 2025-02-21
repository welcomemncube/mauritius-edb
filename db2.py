from typing import List
from fastapi import FastAPI, HTTPException, Depends
import os
os.add_dll_directory('C:\\Program Files\\IBM\\SQLLIB\\BIN')
import ibm_db
import ibm_db_dbi
from pydantic import BaseModel

# Database credentials
DB_HOST = "9938aec0-8105-433e-8bf9-0fbb7e483086.c1ogj3sd0tgtu0lqde00.databases.appdomain.cloud"
DB_PORT = "32459"
DB_UID = "jtd60923"
DB_PWD = "2fqyJboNoabVpCj5"

# Initialize FastAPI
app = FastAPI()

# Pydantic model for response
class ApplicationResponse(BaseModel):
    applicant_name: str
    application_status: str

# Function to establish a database connection
def get_db_connection():
    db2_dsn = f"DATABASE=bludb;HOSTNAME={DB_HOST};PORT={DB_PORT};PROTOCOL=TCPIP;UID={DB_UID};PWD={DB_PWD};SECURITY=SSL"
    try:
        conn = ibm_db.connect(db2_dsn, "", "")
        return ibm_db_dbi.Connection(conn)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database connection error: {str(e)}")

# API endpoint to fetch applicant details by APPLICATION_ID
#convert to post method - don't disclose application id url
@app.get("/application-status/{application_id}", response_model=ApplicationResponse)
def get_application_details(application_id: str, conn=Depends(get_db_connection)):
    try:
        cursor = conn.cursor()
        
        # Query to fetch applicant_name and status using APPLICATION_ID
        query = "SELECT APPLICANT_NAME, STATUS FROM jtd60923.APPLICATION WHERE APPLICATION_ID = ?"
        cursor.execute(query, (application_id,))
        
        result = cursor.fetchone()
        
        if result is None:
            raise HTTPException(
                status_code=404, 
                detail=f"No application found for APPLICATION_ID: {application_id}"
            )
        
        return ApplicationResponse(
            applicant_name=result[0],
            application_status=result[1]
        )
    
    except Exception as e:
        raise HTTPException(
            status_code=500, 
            detail=f"Error fetching application details: {str(e)}"
        )
    finally:
        if 'cursor' in locals():
            cursor.close()

# Health check endpoint
@app.get("/health")
def health_check():
    return {"status": "healthy"}