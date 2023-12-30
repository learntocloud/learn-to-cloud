# चरण 5: क्लाउड सुरक्षा आधारभूतहरू

लेखक: [Dayspring Johnson](https://twitter.com/daycyberwox)

## यो चरण क्लाउडमा कसरी लागू हुन्छ?

क्लाउड कम्प्युटिङको लागि सुरक्षा सबैभन्दा ठूलो चुनौती हो। क्लाउड अपनाउने क्रम बढ्दै जाँदा, क्लाउड सुरक्षा घटनाहरू र कमजोरीहरू समान रूपमा बढ्दै गएका छन्।

तपाइँलाई अघिल्लो चरणहरूमा पेश गरिएको व्यक्तिगत क्लाउड कम्पोनेन्टहरू सबैलाई केहि आकार वा फारममा सुरक्षा चाहिन्छ। अझ राम्रो, हाम्रो क्लाउड वातावरणमा सम्भावित रूपमा डेटा वा पूर्वाधार सम्झौतामा निम्त्याउन सक्ने कमजोरीहरू फेला पार्न र शोषण गर्नबाट दुर्भावनापूर्ण अभिनेताहरूलाई रोक्नको लागि सुरक्षालाई प्रत्येक दृष्टिकोणबाट विचार गर्नुपर्दछ।

यहाँ द्वारा मेरो मनपर्ने लेख मध्ये एक छ [Christophe Tafani-Dereeper](https://twitter.com/christophetd) जसले क्लाउड सुरक्षा उल्लंघन र कमजोरीहरू समावेश गर्दछ:

- [Cloud Security Breaches and Vulnerabilities: 2021 in Review](https://blog.christophetd.fr/cloud-security-breaches-and-vulnerabilities-2021-in-review/)

म जाँच गर्न सिफारिस गर्दछु[Securing DevOps: Security in the Cloud](https://www.manning.com/books/securing-devops) by [Julien Vehent](https://twitter.com/jvehent) जसले क्लाउड पूर्वाधारको सुरक्षा, लगिङ, खतराहरू पत्ता लगाउने आदिका लागि धेरै मुख्य कम्पोनेन्टहरू समेट्छ। यसमा व्यावहारिक र भिजुअल एडहरू पनि छन् जसले यी अवधारणाहरू सिक्न मद्दत गर्दछ।

अर्को पुस्तक सिफारिस छ [Practical Cloud Security: A Guide for Secure Design and Deployment](https://www.oreilly.com/library/view/practical-cloud-security/9781492037507/) द्वारा [Chris Dotson](https://www.linkedin.com/in/chris-dotson-6a9b55/). क्लाउड सुरक्षाका लागि आवश्यक विभिन्न अवधारणा, मापदण्ड, ढाँचा र सिद्धान्तहरूमा गहिराइमा जाँदा यो पुस्तक अघिल्लो पुस्तकको लागि राम्रो मानार्थ स्रोत हो, र नामले जस्तै यो व्यावहारिक छ।

यो सधैं सम्झनुहोस्, तपाईंले नबुझेको कुरा सुरक्षित गर्न सक्नुहुन्न, त्यसैले क्लाउडको वास्तुकला र मुख्य भागहरू बुझ्न निश्चित गर्नुहोस् ताकि तपाईंले तिनीहरूलाई ठीकसँग सुरक्षित गर्न सक्नुहुन्छ।

## स्रोतहरू

| क्लाउड प्लेटफर्म | शीर्षक| विवरण  |
|:-------------- | ------ | ------ |
AWS, Azure र GCP| [Hacking The Cloud](https://hackingthe.cloud/)| क्लाउड ह्याकिङ क्लाउड शोषणमा सामान्य हुने आक्रमण/रणनीति/प्रविधीहरूको एक विश्वकोश हो। |
AWS | [Flaws.Cloudf](http://flaws.cloud/)| स्तरहरूको एक श्रृंखला मार्फत तपाईंले Amazon Web Services (AWS) प्रयोग गर्दा सामान्य गल्तीहरू र गठबन्धनको बारेमा सिक्नुहुनेछ। |
AWS | [Flaws2.Cloud](http://flaws2.cloud/)| मूल Flaws.Cloud Challenge जस्तै यो ट्यूटोरियलले तपाईंलाई AWS सुरक्षा अवधारणाहरू सिकाउँछ तर यस पटक आपत्तिजनक र रक्षा |
AWS | [Cloud Goat](https://github.com/RhinoSecurityLabs/cloudgoat)| क्लाउडगोट राइनो सेक्युरिटी ल्याब्सको "डिजाइन द्वारा कमजोर" AWS डिप्लोइमेन्ट उपकरण हो जसले तपाईंलाई धेरै "क्याप्चर-द-फ्ल्याग" शैली परिदृश्यहरू सिर्जना गरेर र पूरा गरेर आफ्नो क्लाउड साइबरसुरक्षा सीपहरू सुधार गर्न अनुमति दिन्छ। |
AWS | [Sadcloud](https://github.com/nccgroup/sadcloud)| Sadcloud Terraform संग असुरक्षित AWS पूर्वाधार कताई को लागी एक उपकरण हो। तपाईं यी पूर्वाधारहरू विरुद्ध आफ्नो AWS सुरक्षा ज्ञान परीक्षण गर्न सक्नुहुन्छ। |
AWS | [AWS Well-Architected Labs: Security](https://www.wellarchitectedlabs.com/security/)| सेक्युरिटी ल्याबहरू वास्तुकलाका उत्कृष्ट अभ्यासहरू प्रयोग गरेर सिक्न, मापन गर्न र निर्माण गर्न मद्दत गर्न ह्यान्ड्स-अन ल्याबहरूको ढाँचामा कागजात र कोड हुन्। |
AWS | [Attack Detection Fundamentals](https://labs.f-secure.com/blog/attack-detection-fundamentals-2021-aws-lab-1/)| यो तीन-भाग शृङ्खलाले पत्ता लगाउन र विश्लेषणको लागि AWS र लग प्रविष्टिहरूमा अन्त्य-देखि-अन्त किल चेन अन्वेषण गर्दछ। |
Azure | [Attack Detection Fundamentals](https://labs.f-secure.com/blog/attack-detection-fundamentals-2021-azure-lab-1/)| यो तीन-भाग शृङ्खलाले Azure मा अन्त्य-देखि-अन्त किल चेन र पत्ता लगाउन र विश्लेषणको लागि लग प्रविष्टिहरू अन्वेषण गर्दछ। |
Azure | [CONVEX](https://github.com/Azure/CONVEX)| क्लाउड खुला स्रोत नेटवर्क भेद्यता शोषण अनुभव (CONVEX) ले तपाईंलाई खेल्नको लागि तपाईंको Azure भाडामा रहेको फ्ल्याग वातावरणहरू क्याप्चर गर्छ।  |
Azure | [Securing Azure Infrastructure - Hands on Lab Guide](https://github.com/azurecitadel/azure-security-lab)| विभिन्न azure सुरक्षा नियन्त्रणहरू प्रयोग गरेर azure पूर्वाधार सुरक्षित गर्न गाइडमा हात। |
Azure | [Azure Security Technologies](https://microsoftlearning.github.io/AZ500-AzureSecurityTechnologies/)| नीला सुरक्षा कभर गर्ने विभिन्न प्रयोगशाला परिदृश्यहरू। |
Azure | [Create an Azure Vulnerable Lab](https://0xpwn.wordpress.com/2022/03/05/setting-up-an-azure-pentest-lab-part-1-anonymous-blob-access/)| एजुर कमजोरीहरू व्याख्या गर्ने चार-भाग श्रृंखला। |
GCP | [GCP GOAT](https://gcpgoat.joshuajebaraj.com/)| GCP-बाख्रा GCP सुरक्षा सिक्न र अभ्यास गर्न जानबूझकर कमजोर GCP वातावरण हो |
GCP | [ThunderCTF](https://aws.amazon.com/training/)| Thunder CTF ले खेलाडीहरूलाई Google क्लाउड प्लेटफर्म (GCP) मा कमजोर क्लाउड परियोजनाहरू आक्रमण गर्ने अभ्यास गर्न अनुमति दिन्छ। प्रत्येक स्तरमा, खेलाडीहरूलाई क्लाउड डिप्लोइमेन्टको शोषणको लागि यो भित्र भण्डार गरिएको "गोप्य" पूर्णांक फेला पार्ने जिम्मा दिइएको छ। |
Kubernetes | [Kubernetes Goat](https://madhuakula.com/kubernetes-goat/)| Kubernetes बाख्रा एक अन्तरक्रियात्मक Kuberenetes सुरक्षा लर्निंग खेल मैदान हो |

## Projects

| क्लाउड प्लेटफर्म | शीर्षक  | विवरण  |
|:-------------- | ------ | ------ |
AWS | [Threat Detection With AWS GuardDuty](https://www.youtube.com/watch?v=lLgqP4cbdWg&t=127s)| खतराहरू पत्ता लगाउन AWS GuardDuty कसरी प्रयोग गर्ने भनेर ट्यूटोरियल। |
AWS | [AWS Threat Simulation & Detection](https://github.com/sbasu7241/AWS-Threat-Simulation-and-Detection/blob/main/aws.credential-access.ec2-get-password-data.md)| यो कागजातले आक्रमण र पत्ता लगाउन/विश्लेषणको लागि स्ट्र्याटस रेड टोली र सुमोलोजिकको प्रयोग देखाउँछ। यो कुनै पनि अन्य SIEM प्रयोग गरेर नक्कल गर्न सकिन्छ। |
Azure | [Azure Cloud Detection Lab(Blog)](https://cyberwoxacademy.com/azure-cloud-detection-lab-project/), [Azure Cloud Detection Lab(Videos)](https://youtube.com/playlist?list=PLBNtagSCmDWw27ccfeWeiaMcpNIxpGHy4)| Azure Sentinal को प्रयोग गरेर azure वातावरणमा खतराहरू कसरी पत्ता लगाउने भनेर देखाउने ह्यान्ड्स-अन प्रोजेक्ट। |
Azure | [SIEM Tutorial for Beginners Azure Sentinel Tutorial MAP with LIVE CYBER ATTACKS!](https://youtu.be/RoZeVbbZ0o0)| एक ह्यान्ड्स-अन प्रोजेक्टले कसरी महको भाँडो सेटअप गर्ने र Azure Sentinel प्रयोग गरेर दुर्भावनापूर्ण ट्राफिक विश्लेषण गर्ने देखाउँदै। |

## यस चरणको अन्त्यमा तपाईले परिचित हुनै पर्ने कुराहरू

कोर IAM अवधारणाहरू (प्रयोगकर्ताहरू, भूमिकाहरू, नीतिहरू, समूहहरू, सेवा खाताहरू/प्रिन्सिपलहरू, आदि) को समझ।

- क्लाउडमा प्रमाणीकरणले कसरी काम गर्छ भन्ने बुझाइ।
- सुरक्षित क्लाउड भण्डारण, कम्प्युट, नेटवर्किङ, एप्लिकेसनहरू र यस्तै अन्यको बुझाइ।
- क्लाउडमा सामान्य सुरक्षा कमजोरीहरू र गलत कन्फिगरेसनहरू।
- क्लाउड लगहरू कसरी जाँच गर्ने र क्लाउड वातावरणमा सम्झौता गरिएको छ कि छैन भनेर निर्धारण गर्ने।
- क्लाउड वातावरण विरुद्ध आक्रमण कसरी अनुकरण गर्ने।
- सुरक्षा परीक्षणको लागि क्लाउडमा कमजोर पूर्वाधार कसरी तैनात गर्ने।
- ज्ञान र विभिन्न क्लाउड सुरक्षा उपकरणहरू प्रयोग।

## तपाईंले हेर्न चाहनुहुने प्रमाणपत्रहरू

- [प्रमाणित क्लाउड सुरक्षा पेशेवर](https://www.isc2.org/Certifications/CCSP)
- [माइक्रोसफ्ट प्रमाणित: सुरक्षा परिचालन विश्लेषक एसोसिएट](https://docs.microsoft.com/en-us/learn/certifications/security-operations-analyst/)
- [माइक्रोसफ्ट प्रमाणित: Azure सुरक्षा इन्जिनियर एसोसिएट](https://docs.microsoft.com/en-us/learn/certifications/azure-security-engineer/)
- [AWS प्रमाणित सुरक्षा - विशेषता](https://aws.amazon.com/certification/certified-security-specialty/)
- [गुगल प्रोफेशनल क्लाउड सुरक्षा इन्जिनियर](https://cloud.google.com/certification/cloud-security-engineer)

### व्यावहारिक प्रमाणीकरण (प्रशिक्षण समावेश)

यी कम थाहा भएका प्रमाणीकरणहरू हुन् तर तिनीहरू तपाईंलाई आवश्यक पर्ने तालिमहरू प्रदान गर्नमा केन्द्रित छन् साथै हातमा प्रमाणीकरणहरू जहाँ तपाईंले प्रयोग गर्न सिकेका सीपहरू  बहु विकल्प प्रश्नहरू मार्फत क्लिक नगरी राख्नुहुन्छ।

- [प्रमाणित Az रेड टीम प्रोफेशनल](https://bootcamps.pentesteracademy.com/course/ad-azure-may-21)
- [प्रमाणित Azure वेब अनुप्रयोग सुरक्षा व्यावसायिक](https://bootcamps.pentesteracademy.com/course/azure-appsec-beginner-jul-22)
- [Offensive Azure सुरक्षा पेशेवर](https://cloudbreach.io/labs/)
