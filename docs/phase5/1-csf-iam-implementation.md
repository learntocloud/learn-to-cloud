# Topic 1: Identity and Access Management (IAM)

> ⏱️ **Estimated time:** 3-4 days

Identity and Access Management (IAM) is your frontline defense for controlling who can access your cloud environment and what they can do once they're in. Before you secure your Journal API, you need to understand IAM fundamentals.

---

## 📚 Learning Path

### Learning Objectives

By the end of this topic, you will understand:

- IAM concepts: users, groups, roles, and policies
- The principle of least privilege and how to apply it
- Service accounts and workload identity
- Multi-factor authentication (MFA) and when to use it
- Common IAM security mistakes and how to avoid them

## Core Learning Resources

### 1. Read: IAM Fundamentals
Start with your cloud provider's IAM documentation:

**AWS**: [IAM User Guide](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html) - Read sections 1-3
**Azure**: [Azure RBAC Documentation](https://learn.microsoft.com/en-us/azure/role-based-access-control/overview) - Read overview and concepts
**GCP**: [IAM Overview](https://cloud.google.com/iam/docs/overview) - Read concepts and best practices

### 2. Watch: IAM in Action
- [AWS IAM Tutorial](https://www.youtube.com/watch?v=Ul6FW4UANGc) (30 minutes)
- [Azure RBAC Explained](https://www.youtube.com/watch?v=C7hJ3oGHrhM) (25 minutes)
- [GCP IAM Deep Dive](https://www.youtube.com/watch?v=96HlT4f2AUU) (40 minutes)

### 3. Learn: Security Best Practices
Read these essential security guides:
- [OWASP Cloud Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cloud_Security_Cheat_Sheet.html)
- [CIS Cloud Security Controls](https://www.cisecurity.org/controls/cloud-security-controls)

## Key Concepts to Master

### IAM Components
- **Users**: Individual people or applications
- **Groups**: Collections of users with similar permissions
- **Roles**: Set of permissions that can be assumed
- **Policies**: Documents that define permissions

### Principle of Least Privilege
Give users and services only the minimum permissions needed to do their job. This reduces the impact if credentials are compromised.

### Service Accounts vs User Accounts
- **User accounts**: For people who need to access resources
- **Service accounts**: For applications and services to access resources

### Authentication vs Authorization
- **Authentication**: Who are you? (login, MFA)
- **Authorization**: What can you do? (permissions, policies)

---

## 🧪 Test Your Knowledge

Use an AI assistant to test your understanding. Here are example prompts:

1. "Quiz me on the difference between IAM users, groups, and roles"
2. "Ask me to explain the principle of least privilege with examples"
3. "Test my knowledge of when to use service accounts vs user accounts"
4. "Quiz me on the difference between authentication and authorization"
5. "Ask me about common IAM security mistakes and how to prevent them"
6. "Test my understanding of IAM policies and how they work"
7. "Quiz me on when and why to use multi-factor authentication"
8. "Ask me about workload identity and why it's better than long-lived keys"

## Additional Resources (Optional)

### Hands-on Practice 
- [AWS IAM Workshop](https://catalog.workshops.aws/general-immersionday/en-US/basic-modules/30-iam)
- [Azure RBAC Tutorial](https://learn.microsoft.com/en-us/azure/role-based-access-control/tutorial-role-assignments-user-powershell)
- [GCP IAM Tutorial](https://cloud.google.com/iam/docs/quickstart)

### Security Labs
- [PwnedLabs - AWS IAM Enumeration](https://pwnedlabs.io/labs/intro-to-aws-iam-enumeration)
- [PwnedLabs - IAM Breaches with CloudTrail](https://pwnedlabs.io/labs/identify-iam-breaches-with-cloudtrail-and-athena)

### Reference Documentation
- [AWS IAM Best Practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)
- [Azure Security Best Practices](https://learn.microsoft.com/en-us/azure/security/fundamentals/best-practices-and-patterns)
- [GCP Security Best Practices](https://cloud.google.com/security/best-practices)

## Next Steps

Once you feel confident with IAM concepts, move on to Topic 2. You'll implement all of this knowledge when you secure your Journal API in the capstone project.

---

## ✅ Topic Checklist

Before moving on, make sure you have:

- [ ] Understood IAM concepts (users, groups, roles, policies)
- [ ] Learned the principle of least privilege
- [ ] Understood service accounts vs user accounts
- [ ] Learned about MFA and when to use it
- [ ] Reviewed cloud provider IAM documentation
- [ ] (Optional) Completed hands-on IAM workshops