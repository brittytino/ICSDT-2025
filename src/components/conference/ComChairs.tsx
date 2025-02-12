import React from "react";

const committeeData = [
  {
    title: "Conference General Chair",
    members: [
      "Dr. B.L Shivakumar, Principal & Secretary, Sri Ramakrishna College of Arts & Science, Tamilnadu India",
      "Wung Ling Shing, INTI International University, Malaysia",
    ],
  },
  {
    title: "Program Committee Chairs",
    members: [
      "Dr. G. Maria Priscilla, HoD Computer Science, Sri Ramakrishna College of Arts & Science, Tamilnadu India",
      "Dr. Siti Sarah, INTI University, Malaysia",
    ],
  },
  {
    title: "Program Committee Co-chairs",
    members: [
      "Dr. Malathy, INTI University, Malaysia",
      "Dr. M. Hemalatha, Sri Ramakrishna College of Arts & Science, Tamilnadu India",
      "Dr. M. Mahendiren, Sri Ramakrishna College of Arts & Science, Tamilnadu India",
    ],
  },
  {
    title: "Steering Committee",
    members: [
      "Dr. Vijaykumar, Sri Ramakrishna College of Arts & Science, Tamilnadu India",
      "Dr. S. Arockiasamy, Dean, University of Nizwa, Oman",
      "Dr. Karthikeyan Subramanian, Head of Department, College of Applied Sciences, Oman",
      "Dr. Binod Kumar, Dean, JSPM’s Rajarshi Shahu College of Engineering, Pune",
      "Dr. Siddappa",
      "Dr. Vijay Singh Rathore",
      "Dr. Sivakumar Per Theban, Cyberlynx International College, Malaysia",
      "Dr. Mijal Mistry, Software Engineering, Infotech IT Solution, Canada",
      "Dr. Sreekumar Narayanan, Head, Computing Research, Botho University, Botswana",
      "Dr. Pinnamaneni Bhanu Prasad, Vision Specialist, Matrix Vision GmbH, Germany",
      "Dr. D. Balaganesh, Lincoln University, Malaysia",
    ],
  },
  {
    title: "Program Committee Members",
    members: [
      "Dr. N. Sumathi, Sri Ramakrishna College of Arts & Science, Tamilnadu India",
      "Dr. Hariprasad, Sri Ramakrishna College of Arts & Science, Tamilnadu India",
      "Dr. Krishna Priya, Sri Ramakrishna College of Arts & Science, Tamilnadu India",
      "Dr. C. Deepa, Sri Ramakrishna College of Arts & Science, Tamilnadu India",
      "Dr. Vidya, Sri Ramakrishna College of Arts & Science, Tamilnadu India",
    ],
  },
  {
    title: "Organizing Committee Members",
    members: [
      "Dr. P. Kavitha, Sri Ramakrishna College of Arts & Science, Tamilnadu India",
      "Dr. S. Govindaraju, Sri Ramakrishna College of Arts & Science, Tamilnadu India",
      "Dr. V. Suganthi, Sri Ramakrishna College of Arts & Science, Tamilnadu India",
      "Dr. S. Nagarajan, Sri Ramakrishna College of Arts & Science, Tamilnadu India",
      "Dr. J. Jeyaboopathi Raja, Sri Ramakrishna College of Arts & Science, Tamilnadu India",
      "Dr. S. Mohana, Sri Ramakrishna College of Arts & Science, Tamilnadu India",
      "Prof. Devibala Subramanian, Sri Ramakrishna College of Arts & Science, Tamilnadu India",
    ],
  },
  {
    title: "Publicity Chairs",
    members: [
      "INTI University, Malaysia",
      "Prof. SunilSir, Sri Ramakrishna College of Arts & Science",
      "Dr. M. Mahendiren, Sri Ramakrishna College of Arts & Science, Tamilnadu India",
    ],
  },
  {
    title: "Technical Committee Chairs",
    members: [
      "Dr. Siva Shankar Ramasamy, Chiang Mai University, Thailand",
      "Dr. Balamurugan Easwaran, Director ICT Services, University of Africa, Nigeria",
      "Faten Kharbat, Ain University of Science and Technology, UAE",
      "Hani H. Qusa, University College of Applied Sciences, Palestine",
      "Duc T. Pham, Cardiff University, UK",
      "Monica Vladoiu, PG University of Ploiesti, Romania",
      "Muhammad Javed, Dublin City University, Ireland",
      "Muhammad Zarlis, University of Sumatera Utara, Indonesia",
      "Muhanned Alfarras, Gulf University, Bahrain",
      "Deqingzou, Huazhong University of Science and Technology, China",
      "Dr. M. Puspharani, Mother Teresa University, India",
      "Dr. R. Porkodi, Bharathiar University, India",
      "Dr. M. Lalli, Bharathidasan University, India",
      "Dr. Kirubanand, Christ University, India",
      "Dr. C. P. Sumathi, SDNB Vaishnav College, India",
      "Dr. D. Francis Xavior Christopher, SRM University, Trichy",
      "Dr. G. Sathyavathy, Sri Ramakrishna College of Arts & Science for Women, India",
    ],
  },
];

const Committee: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {committeeData.map((section, index) => (
          <div key={index} className="mb-10 p-6 bg-white-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 border-b-2 border-red-500 pb-2">
              {section.title}
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {section.members.map((member, idx) => (
                <li key={idx} className="text-lg bg-white-700 p-4 rounded-md shadow-md">
                  {member}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Committee;
