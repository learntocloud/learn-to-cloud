# Topic 4: Build and access the lab

Now you have everything you need to build your first lab!!

- Actions:
  - In your terminal, `cd` to where the phase1 lab folder is.
  - Run `terraform init`
  - Run `terraform apply`
  - When prompted, type `yes` to confirm.
  - After the apply completes, note the `ctf_instance_public_ip` output. You'll use this to connect to your lab environment.
  ![Terraform Apply output](/phase1/labs/aws/images/terraform-apply-screenshot.png)

You're going to be using SSH a lot, take some time now to learn about it.

- Study: [What is SSH](https://www.cloudflare.com/learning/access-management/what-is-ssh/)

- Action: Ensure you can SSH into the instance using the provided credentials

1. Use SSH to connect to the EC2 instance:

    ``` sh
      ssh ec2-user@<ctf_instance_public_ip>
    ```

2. When prompted for a password, enter: `CTFpassword123!`
3. Once logged in, you'll see a welcome message with instructions for your first challenge.
![ssh into the instance](/phase1/labs/aws/images/ssh-screenshot.png)

Great job! You've successfully built your first lab. When you're ready, move on to [Extra reading](5-reading)
