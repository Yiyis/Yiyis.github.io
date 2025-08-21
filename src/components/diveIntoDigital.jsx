import React from "react";
import ProjectInfo from "./projectInfo";
import Nav from "./nav";
import ScrollToTop from "./scrollToTop";
import data from "../assets/projectsData.json";
import { motion } from "framer-motion";

class DiveIntoDigital extends React.Component {
  render() {
    return (
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <Nav displayLogo={true} />
        <div className="img-container">
          <img
            className="project-main img-fluid cover"
            src="pics/projects/DiveIntoDigital/DiveIntoDigital.JPG"
            alt="Dive into Digital"
          />
          <div className="img-overlay"></div>
          <h1 className="project-title text-center text-white">
            Dive Into Digital
          </h1>
          <ProjectInfo
            year={data[16].date}
            type={data[16].type}
            tools={data[16].tools}
            role={data[16].role}
          />
        </div>
        <div id="content">
          <div className="container-fluid p-custom bg-black">
            <div className="row">
              <div className="col-md-6">
                <h1 className="text-light">DiveIntoDigital</h1>
                <p className="text-light">
                  Created for iPhone using Unity3D, GoogleVR, Adobe
                  AfterEffects, XML feed.
                </p>
                <h3 className="pt-5 text-light">Summary</h3>
                <p className="text-light">
                  Data visualization of Google search trends in Virtual Reality
                  which focuses on the mobile brands from 2011 until now.
                </p>
                <p className="text-light pt-3">
                  Group members: Feng Yuan, Jad Rabbaa and Yiyi Shao
                </p>
              </div>
              <div class="col-md-6 p-0">
                <img
                  src="pics/projects/DiveIntoDigital/DiveIntoDigital.png"
                  className="img-fluid"
                  alt="Text cloud"
                />
              </div>
            </div>
          </div>
          <div className="container-fluid p-custom">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <h3 className="text-dark text-center">Objective</h3>
                <p className="pt-3">
                  In the name of fast paced digital technology brands such as
                  Motorolla, Nokia, etc. birth and die and new brands appear
                  like the iPhone. Hashtags birth and die such as
                  #MannequinChallenge #IceBucketChallenge and #HarlemShake. New
                  words emmerge such as “Unlike”, “Unfriend” “WTF” and “OMG”
                  etc.. and they even go out of the digital ream to get used in
                  real life communication and conversation and even take place
                  in international dictionaries and shape languages.
                </p>
                <p className="pt-3">
                  As Digital futures enthusiasts we have a huge interest in the
                  past of the digital media and technology and how it evolved
                  through the years. Google today is the most used search
                  engines in the world and google analytics is a great source to
                  have as accurate data as possible about different trends and
                  mentions from any past till this date. Google as a platform
                  operates 1.2 trillion searches per year, which means 3.5
                  billion searches PER DAY. Digital technologies such as the
                  floppy disk which was greatly used in the 90s and early 2000s
                  is no longer existant, it was replaced by other technologies
                  such as the CD ROM, the DVD ROM, the usb flash drive, the
                  external hard drive and today the Cloud! Even though a
                  millennial can search today what a floppy disk means, the
                  current used technology will be by far the one known and
                  searched or mentioned on google today hence our choice and
                  interest to go with Google trends as a data source. With the
                  emergence and use of Big Data and 5G the world is looking a
                  new challenge: storage! In the 90s floppy disk was one of the
                  most used disks for data storage and it was only 3.5 MB,
                  todays that seems insane and extremely unuseful. We aim to
                  visualize the billions of mentions of this word relatively to
                  other relevant storages today such as the Hard drive and the
                  cloud storage.
                </p>
                <h3 className="text-dark pt-5 text-center">Technicalities</h3>
                <p className="pt-3">
                  To be able to visualize these tremendous amounts of mentions
                  we needed to scope them down to percentages to visualize them
                  in relativity to each other. In order to give the user/viewer
                  a feeling of the “Sea” of mentions and this endless digital
                  world of words and digits we aim to transport the human from
                  the physical space to a digital virtual one using virtual
                  reality. The words or mentions will be flying around the user
                  with a rotating dial at the feet level that spins as the
                  months and years pass by to make it an experience of 2 minutes
                  or so.
                </p>
                <h3 className="text-dark pt-5 text-center">Using Scenario</h3>
                <p className="pt-3">
                  Mainly used as an art piece in art gallery or public space
                  Tool for SEO (Search engine optimization).
                </p>
                <h3 className="text-dark pt-5 text-center">Action</h3>
                <p className="pt-3">
                  <b>
                    PHASE 1 : Brainstorming & Research for Data | 13 March 2018:
                  </b>
                </p>
                <p>
                  In the class we tried to find some interesting datas source.
                  Below is some data sources we found in class.
                </p>

                <ul>
                  <li>
                    <a href="http://www.asterank.com/">Asteroids movement</a>
                  </li>
                  <li>
                    <a href="http://refikanadol.com/">Geological information</a>
                  </li>
                  <li>Genomic data api:</li>
                  <ul>
                    <li>
                      23ANDME api The 23andMe API Developer Program is free for
                      developers.
                    </li>
                    <li>
                      OpenSNP Tons of data free for download, including many
                      actual 23AndMe data sets. This is where I got my data on
                      how much research has been done for any given SNP. The
                      OpenSNP ranking is based on entries in the SNPedia, papers
                      published in PLoS and Genome.gov, annotations in the
                      Personal Genome Project and papers on Mendeley.
                    </li>
                    <li>
                      SNPedia — This is an open wiki for SNP associations. It
                      has an enormous amount of information on specific SNPs,
                      the different variations and their associations with
                      phenotypes and medical conditions. It doesn’t have the raw
                      data files available through OpenSNP, but it has far more
                      detail on the associations of individual SNPs.
                    </li>
                  </ul>
                  Other resources:
                  <ul>
                    <li>
                      <a href="http://news.mit.edu/2017/dataset-nearby-stars-available-public-exoplanets-0213">
                        Astrology (MIT) data source recently available to the
                        public:
                      </a>
                    </li>
                    <li>
                      <a href="https://www.quora.com/How-many-stars-die-in-a-minute">
                        How many Stars die in a minute
                      </a>
                    </li>
                    <li>
                      <a href="https://www.eia.gov/realtime_grid/#/data/graphs?end=20180316T17&start=20180309T21">
                        US electric system operating data
                      </a>
                    </li>
                  </ul>
                </ul>

                <p className="pt-3">
                  <b>PHASE 2 : Group Meeting | 19 March 2018: </b>
                </p>
                <p>
                  Visible stars in Milky Way: 100 Billion Stars Visible stars to
                  human bared eyes: 5000 stars SCREEN RESOLUTION (2880 x 1800) =
                  5,184,000 PIXELS (iMAC) We are stuck with the visualization of
                  stars dying and birthing in a more effective way instead of
                  just fading in and out, we are also not sure about fit this
                  huge amount numbers in the platform that we are working on, so
                  we take this idea as a plan B and coming up with a new idea.
                </p>
                <p>
                  Final idea - Visualize the keyword that people put in google
                  search engine per minute, themes we have in mind:
                </p>
                <ul>
                  <li>Political parties in US</li>
                  <li>Social media platforms</li>
                  <li>Iphone, Samsung, Google Pixel, LG, Nokia, Huawei</li>
                  <li>Google home, Amazon Alexa</li>
                </ul>
                <p>
                  Google now processes over 40,000 search queries every second
                  on average (visualize them here), which translates to over 3.5
                  billion searches per day and 1.2 trillion searches per year
                  worldwide. How many google searched today:
                  http://www.internetlivestats.com/google-search-statistics/
                  Google Trend API:
                  https://www.npmjs.com/package/google-trends-api Visualization
                  tool: processing or p5.js Installation: projection mapping on
                  a physical “G”
                </p>
                <p className="pt-3">
                  <b>PHASE 2 : Group Meeting & Develpment | 19 March 2018: </b>
                </p>
                <p>
                  Firstly we export the .csv file to .xml file which contains
                  correct tags of each types of data that can be load from
                  Unity3D through xml function. And then Unity get the data as
                  String which can be used as variables to assign to game
                  objects. For this project, we used particle systems to
                  generate the visualization as our base data is numerous. We
                  import GoogleVR package(V1.11) into unity to build the VR
                  environment. It’s running perfectly in Unity but after
                  building out to iPhone, the XML file has been baked to another
                  format with different path. After a lot of research and
                  debugging, we finally found a solution to solve this problem
                  after reading a post here:
                  http://www.cnblogs.com/wuzhang/p/wuzhang20140731.html
                </p>

                <img
                  src="pics/projects/DiveIntoDigital/DiveIntoDigital_3.png"
                  className="img-fluid"
                  alt="Work in Unity"
                />

                <img
                  src="pics/projects/DiveIntoDigital/DiveIntodigital_4.png"
                  className="img-fluid"
                  alt="Javascript code"
                />

                <h3 className="text-dark pt-5 text-center">
                  Feedback and The Future
                </h3>
                <p className="pt-3">
                  We were able to achieve many of the goals we set out to early
                  on in the process; we incorporated a space filled with
                  overwhelming amount of words or mentions around the user and
                  created an immersed environment. In potential future
                  interactions we would like to both refine and expand on the
                  work completed here based off of class discussion and
                  different feedback we received throughout the process:
                </p>
                <ul>
                  <li>
                    Immersion of the user in data can take one step back from
                    how we presented the data. It could be a good pay-off to
                    combine in the visualization how the binary system of a
                    computer works and place the user inside that virtual
                    environment to simulate the process of how computer process
                    data. In this way, audience can “see” the data from where it
                    is generated.
                  </li>
                  <li>
                    In the version of the prototype that we presented in class
                    we studied the amount of mentions related to storage in
                    particular, but as mentioned in the feedback comments, the
                    topic can be anything really. From hashtags used thousands
                    and thousands of times to different brands or technologies
                    searched so many times over the years.
                  </li>
                  <li>
                    Also in our version, we only presented three mentions
                    because of the limits of using unity building the VR
                    environment. The more mentions used the bigger number of
                    cameras needed in Unity to render a good visualization
                    requiring a lot of space and a very powerful computer. In
                    order to import more different data, we can try to move
                    everything to another development engine, such as Unreal,
                    which may provide better support for VR environment.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col text-center pb-5">
              <ScrollToTop />
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}

export default DiveIntoDigital;
