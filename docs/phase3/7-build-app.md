# Topic 7: Capstone

Now with all those cloud skills you have gained, it is time to deploy the API you built in Phase 2 Capstone. You are going to deploy a FastAPI application and a PostgreSQL database on a VM within a Cloud network. Configure networking, security groups, and access controls to allow secure communication between the servers while restricting unauthorized access.

## Capstone Steps

1. **Create Your Cloud Infrastructure:**  

    - Set up a cloud network with public and private subnets.
    - Launch two VMs: one for the API Server (FastAPI) and one for the PostgreSQL database.
    - Configure security groups to allow necessary access between the API and database.
    - Configure gateways for internet access.

2. **Prepare Your API Data (FastAPI):**

    - Set up SSH keys on the API Server to securely clone the [GitHub repository](https://github.com/learntocloud/journal-starter).
    - Configure environment variables for database connection details.
    - Verify the API is up and running by testing the public IP.
    - Configure an Elastic IP for a persistent public IP address for the API server.

    your environment variables should look like this

    ```sql
    POSTGRES_HOST=<replace_with_your_private_ip>
    POSTGRES_PORT=5432
    POSTGRES_USER=<name_of_postgres_user>
    POSTGRES_PASSWORD=<password_of_user>
    POSTGRES_DB=<name_of_db>
    DATABASE_URL= postgresql://<name_of_postgres_user>:<password_of_user>@<replace_with_your_private_ip>:5432/<name_of_db>
    ```

3. **Prepare Your Database (PostgreSQL):**

    - Install PostgreSQL on the Database Server VM.
    - Configure secure remote access to the database server using SSM, Azure Bastion 
    - Allow installation of dependencies from the internet.
    - Configure it to accept connections from the API Server by modifying the ```pg_hba.conf``` and ```postgresql.conf``` files.
    - Create the database and user needed for FastAPI to connect.
    - Create the ```entries``` table within the database.

4. **Test API-Database Communication:**
    - Ensure the API is correctly interacting with the PostgreSQL database by testing read and write operations.
    - Test the different Endpoints using this format

        ```sh
        http://<elastic-ip>:<port-number>/<api-endpoint>```

        ```eg
        http://52.32.59.145:8000/entries
        ```

    - Verify that data is being correctly stored and retrieved from the database.