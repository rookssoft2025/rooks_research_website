import React, { useEffect } from 'react'
import AOS from 'aos';
import '../Design/ResearchCards.css'

const ResearchCards= () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <>

            <div className='project-container' >
                <div className='card-projects' data-aos="fade-up"
                >
                    <h3>AI</h3>
                    <p>AI is increasingly integrated into all aspects of modern life, from banking and healthcare to entertainment and transportation. It uses advanced algorithms to analyze data, automate tasks, and enhance decision-making. While AI improves efficiency and convenience, its rise raises ethical concerns about employment, privacy, and bias.</p>
                </div>
                <div className='card-projects' data-aos="fade-up"
                >
                    <h3>AR</h3>
                    <p>
                        AR advertising blends digital elements with the real world, creating interactive and engaging experiences for users. Businesses can use AR to showcase products in innovative ways, such as allowing virtual try-ons. Delivered through channels like e-signs, social media, and apps, AR advertising offers immersive and memorable customer experiences.
                    </p>
                </div>
                <div className='card-projects' data-aos="fade-up"
                >
                    <h3>Blockchain</h3>
                    <p>
                        Blockchain technology is transforming various industries with its decentralized and transparent approach. It ensures data integrity, enhances security, and builds trust through an immutable transaction ledger. Key applications in finance, healthcare, and real estate showcase its potential to drive innovation and growth. Explore how blockchain can revolutionize your industry and unlock new opportunities.
                    </p>
                </div>
                <div className='card-projects' data-aos="fade-up"
                >
                    <h3>Biomedical Engineering</h3>
                    <p>
                        Biomedical engineering combines engineering and medicine to transform healthcare. It advances patient care through innovations in diagnostics, treatment, tissue engineering, and regenerative medicine. Biomedical engineers drive improvements in health outcomes, extend lifespans, and enhance quality of life by pushing the boundaries of medical technology and collaborating across disciplines.
                    </p>
                </div>
                <div className='card-projects' data-aos="fade-up"
                >
                    <h3>Cryptography</h3>
                    <p>
                        Cryptography secures information transmitted over the web by using encryption. It protects text in chat rooms, emails, online meetings, and web transactions. Without encryption, anyone with physical access to the data cables could intercept and read the information.
                    </p>
                </div>
                <div className='card-projects' data-aos="fade-up"
                >
                    <h3>Computer Vision</h3>
                    <p>
                        Computer vision enables machines to interpret visual data like humans, impacting industries such as manufacturing, healthcare, retail, and autonomous vehicles. Advances in deep learning and AI have enhanced its accuracy, revolutionizing areas from medical diagnosis to warehouse management. Computer vision is essential for modern tech innovations, including surveillance, smart cities, and augmented reality.
                    </p>
                </div>

                <div className='card-projects' data-aos="fade-up"
                >
                    <h3>Cloud Computing</h3>
                    <p>
                        Cloud computing delivers scalable, flexible resources online, eliminating the need for significant hardware investments. It reduces IT costs, enhances communication, and boosts productivity, allowing businesses to adapt swiftly to market changes and streamline their operations efficiently.
                    </p>
                </div>
                <div className='card-projects' data-aos="fade-up"
                >
                    <h3>Deep Learning(DL)</h3>
                    <p>
                        Deep learning, a subset of AI, mimics neural networks to analyze and categorize large volumes of unstructured data. It powers advanced applications like image recognition, natural language processing, and autonomous vehicles, driving innovation and solving complex problems across industries.
                    </p>
                </div>
                <div className='card-projects' data-aos="fade-up"
                >
                    <h3>Edge Computing</h3>
                    <p>
                        Modern applications are ever more after fog computing, which is an outgrowth of cloud
                        computing. By distributing computer power closer to the network's edge, it lowers latency
                        and uses less bandwidth. Because it allows relevant data processing and analysis at the
                        network's edge, this design is particularly useful for Internet of Things devices.
                    </p>
                </div>
                <div className='card-projects' data-aos="fade-up"
                >
                    <h3>Fog Computing</h3>
                    <p>
                        Modern applications are ever more after fog computing, which is an outgrowth of cloud
                        computing. By distributing computer power closer to the network's edge, it lowers latency
                        and uses less bandwidth. Because it allows relevant data processing and analysis at the
                        network's edge, this design is particularly useful for Internet of Things devices.
                    </p>
                </div>
                <div className='card-projects' data-aos="fade-up"
                >
                    <h3>Green Computing</h3>
                    <p>
                        Green computing focuses on enhancing resource efficiency, using renewable energy, and reducing power consumption to minimize technology's environmental impact. It aims to lower the carbon footprint of IT infrastructure and promote a more sustainable, eco-friendly future.
                    </p>
                </div>

                <div className='card-projects' data-aos="fade-up"
                >
                    <h3>Generative AI</h3>
                    <p>
                        Generative AI refers to models that use large datasets to create new content, such as text, images, or code, by making predictions based on their training. Unlike other AI types that focus on tasks like data analysis or controlling self-driving cars, generative AI is designed specifically for content creation.
                    </p>
                </div>
                <div className='card-projects' data-aos="fade-up"
                >
                    <h3>Human Computer
                        Interaction</h3>
                    <p>
                        Right now, interactive interface design, performance and evaluation—all aimed at
                        improving the user experience— continue the main focus of HCI. UX, UX-centered, and
                        UX-interface design are all integrated in this.
                    </p>
                </div>
                <div className='card-projects' data-aos="fade-up"
                >
                    <h3>IoT</h3>
                    <p>
                        IoT connects physical systems and objects to enable efficient data exchange, automation, and remote control. It enhances efficiency in various sectors, including smart homes, wearables, industrial sensors, and healthcare, making environments more intelligent and interconnected.
                    </p>
                </div>
                <div className='card-projects' data-aos="fade-up"
                >
                    <h3>Large Language Model</h3>
                    <p>
                        Large Language Models (LLMs) use neural networks with numerous parameters and self-supervised learning to understand and generate text. They handle tasks like translation, conversation, coding, summarization, and image generation from text. Examples include Google's BERT and OpenAI's ChatGPT. LLMs rely on deep learning technologies for natural language processing tasks.
                    </p>
                </div>
                <div className='card-projects' data-aos="fade-up"
                >
                    <h3>Machine Learning (ML)</h3>
                    <p>
                        AI is implemented in ML, which gives the system the skill to severally learn from
                        experience and improve absence the requirement for explicit programming. This is
                        conceivable because robots can now be trained rather than programmed because to the
                        copiousness of data that is currently accessible. It is considered as a crucial technologic
                        improvement accomplished of large-scale data analysis.
                    </p>
                </div>
                <div className='card-projects' data-aos="fade-up"
                >
                    <h3>Natural Language
                        Processing</h3>
                    <p>
                        NLP is widely used across various fields, including enabling voice commands for virtual assistants, analyzing social media for sentiment, improving healthcare through text analysis, powering machine translation, and enhancing search engines to find relevant information quickly.
                    </p>
                </div>
                <div className='card-projects' data-aos="fade-up"
                >
                    <h3>Networking</h3>
                    <p>
                        Networking enables global connectivity and communication across various devices, supporting multimedia interactions, professional relationships, and resource sharing. It is crucial for business efficiency, forming partnerships, accessing new markets, and managing infrastructure through cloud computing and remote access. Overall, networking helps individuals and organizations thrive in the digital age.
                    </p>
                </div>
                <div className='card-projects' data-aos="fade-up"
                >
                    <h3>Quantum Computing</h3>
                    <p>
                        Quantum computing could revolutionize industries by tackling complex problems beyond traditional computers, with potential benefits in operations, simulations, encryption, and machine learning. Although still in early stages, its growing interest and investment suggest significant future impact.
                    </p>
                </div>
                <div className='card-projects' data-aos="fade-up"
                >
                    <h3>Robotics</h3>
                    <p>
                        Robotics is widely used across various industries to automate tasks, enhance productivity, and improve precision. In medicine, robots assist with minimally invasive surgeries; in logistics, they handle warehouse operations; in agriculture, they manage planting and harvesting; and in the service sector, they support tasks and interact with customers.
                    </p>
                </div>
                <div className='card-projects' data-aos="fade-up"
                >
                    <h3>Security</h3>
                    <p>
                        Cybersecurity is crucial for protecting data and digital resources from evolving threats like malware and ransomware. It involves implementing strong security measures, regular updates, and training to ensure system integrity and build trust in the digital ecosystem.
                    </p>
                </div>
                <div className='card-projects' data-aos="fade-up"
                >
                    <h3>Sustainable Computing</h3>
                    <p>
                        Sustainable computing focuses on reducing energy use, e-waste, and carbon emissions from technology. It involves energy-efficient hardware, optimized data centers, and responsible recycling. Techniques like virtualization, cloud computing, and renewable energy further support this shift toward a more eco-friendly digital environment.
                    </p>
                </div>
                <div className='card-projects' data-aos="fade-up"
                >
                    <h3>Theoretical Computer Science</h3>
                    <p>
                        Theoretical Computer Science is incited by every day, practical computation, despite
                        having an outline, mathematical authentication. Understanding the nature of computation
                        and developing more effective methods are the destinations of this endeavour.
                    </p>
                </div>
                <div className='card-projects' data-aos="fade-up"
                >
                    <h3>Ubiquitous Computing</h3>
                    <p>
                        All of the things in our surroundings are equipped with connection features through
                        ubiquitous computing, often reference to as pervasive computing, which allows them to
                        make known with one another, automate repetitive operations, and require little human
                        intervention to operate and abide by machine commands.
                    </p>
                </div>
                <div className='card-projects' data-aos="fade-up"
                >
                    <h3>Virtual Reality</h3>
                    <p>
                        Virtual reality creates immersive computer-generated environments that users can explore through a headset. It is used in gaming, business, entertainment, and education for simulations, training, and interactive experiences.
                    </p>
                </div>
                <div className='card-projects' data-aos="fade-up"
                >
                    <h3>Wireless Networks</h3>
                    <p>
                        Wireless networks are crucial for connecting devices and enabling communication on the go, supporting tasks like online gaming, video streaming, and remote work. They also drive innovations in areas such as driverless cars and smart cities. Emerging technologies like 5G promise faster speeds, lower latency, and greater reliability.
                    </p>
                </div>
                <div className='card-projects' data-aos="fade-up"
                >
                    <h3>Web Technologies</h3>
                    <p>
                        The term "web technology" describes the range of instruments and methods used in the
                        process of communicating across the Internet between different kinds of devices. To access
                        web pages, one needs a web browser. Programs that show text, data, images, motion, and
                        video over the Internet are known as web browsers. Web browser software interfaces can be
                        used to access World Wide Web resources that are hyperlinked.
                    </p>
                </div>
                <div className='card-projects' data-aos="fade-up"
                >
                    <h3>XAI</h3>
                    <p>
                        Explainable AI (XAI) focuses on making complex machine learning models, like deep learning "black boxes," understandable to humans. Unlike simpler models such as decision trees or linear regression, which are more transparent and reveal relationships between outcomes and features, sophisticated models are often too complex to interpret easily.
                    </p>
                </div>
                <div className='card-projects' data-aos="fade-up">
                    <h3>Yield Optimization</h3>
                    <p>
                        The term "yield optimization" describes the methods and approaches used by publishers and
                        marketers to optimize the income from their Electronic investments, mostly from
                        advertising. To increase return on investment, it entails data analysis, price adjustments,
                        improved ad placements, and use of several ad networks and exchanges.
                    </p>
                </div>
                <div className='card-projects' data-aos="fade-up">
                    <h3>Zero-waste Technology</h3>
                    <p>
                        Zero-waste technology aims to eliminate or reduce waste at all stages of production and consumption by designing systems and processes that focus on recycling, reusing materials, and composting organic waste. This approach supports sustainability and resource conservation across various sectors, contributing to an environmentally friendly future.
                    </p>
                </div>
            </div>
        </>
    )
}

export default ResearchCards
