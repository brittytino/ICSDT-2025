import React, { useState, useEffect } from "react";

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
      "Dr. M. Hemalatha, Associate Professor, Sri Ramakrishna College of Arts & Science, Tamilnadu India",
      "Dr. N. Mahendiran, Assistant Professor, Sri Ramakrishna College of Arts & Science, Tamilnadu India",
      "Prof. Ir. Dr. Malathy Batumalay, INTI University, Malaysia",
      "AP. Dr. Deshinta Arrova Dewi, INTI University, Malaysia",
    ],
  },
  {
    title: "Steering Committee",
    members: [
      "Dr. Vijaykumar, Sri Ramakrishna College of Arts & Science, Tamilnadu India",
      "Dr. S. Arockiasamy, Dean, University of Nizwa, Oman",
      "Dr. Karthikeyan Subramanian, Head of Department, College of Applied Sciences, Oman",
      "Dr. Binod Kumar, Dean, JSPM's Rajarshi Shahu College of Engineering, Pune",
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
      "Dr. Malathy Batumalay, INTI University, Malaysia",
      "Ms. Nor Anis Adila Mohamad, INTI University, Malaysia",
      "Ms. Malini Chandran, INTI University, Malaysia",
      "Mr. A.Sunil Samson M.Sc.,M.Phil, Sri Ramakrishna College of Arts & Science",
      "Dr. N. Mahendiran, MCA, M.Phil, Ph.D, Sri Ramakrishna College of Arts & Science",
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

const Committee = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const filteredCommitteeData = committeeData.map(section => ({
    ...section,
    members: section.members.filter(member => 
      member.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.members.length > 0);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header with Search */}
      <div className={`sticky top-0 z-10 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Conference Committee</h1>
          
          <div className="relative">
            {!isSearchVisible ? (
              <button 
                onClick={() => setIsSearchVisible(true)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Show search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            ) : (
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-48 px-3 py-1 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                  autoFocus
                />
                <button 
                  onClick={() => {
                    setIsSearchVisible(false);
                    setSearchTerm("");
                  }}
                  className="ml-2 p-1 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Close search"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-black"></div>
          <div className="absolute top-32 left-8 w-32 h-32 rounded-full bg-black"></div>
          <div className="absolute bottom-8 right-32 w-48 h-48 rounded-full bg-black"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <p className="text-lg max-w-3xl mx-auto">
            Meet the accomplished academics and professionals guiding this prestigious conference, bringing expertise from institutions around the world.
          </p>
        </div>
      </div>
      
      {/* Filtered Results Notice */}
      {searchTerm && (
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3">
            <p>
              Showing results for <span className="font-semibold">"{searchTerm}"</span>
              {filteredCommitteeData.length > 0 && (
                <span className="text-sm text-gray-600 ml-2">
                  ({filteredCommitteeData.reduce((sum, section) => sum + section.members.length, 0)} members found)
                </span>
              )}
            </p>
            <button 
              onClick={() => setSearchTerm("")} 
              className="text-sm px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
            >
              Clear
            </button>
          </div>
        </div>
      )}
      
      {/* Committee Sections */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="space-y-8">
          {filteredCommitteeData.map((section, index) => (
            <div 
              key={index}
              className="overflow-hidden bg-white rounded-xl border border-gray-100 transition-all duration-300"
            >
              <div 
                className="p-5 cursor-pointer flex justify-between items-center border-b border-gray-100 hover:bg-gray-50 transition-colors"
                onClick={() => setExpandedSection(expandedSection === index ? null : index)}
              >
                <h3 className="text-xl font-semibold">{section.title}</h3>
                <div className="flex items-center">
                  <span className="text-sm mr-3">{section.members.length} members</span>
                  <div className={`w-6 h-6 flex items-center justify-center rounded-full transition-colors ${expandedSection === index ? 'bg-black text-white' : 'bg-gray-100'}`}>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-4 w-4 transform transition-transform ${expandedSection === index ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className={`transition-all duration-300 ease-in-out ${expandedSection === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
                  {section.members.map((member, idx) => {
                    const parts = member.split(', ');
                    const name = parts[0];
                    const affiliation = parts.slice(1).join(', ');
                    
                    // Generate a consistent pastel color based on name
                    const nameHash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
                    const hue = nameHash % 360;
                    const bgColor = `hsl(${hue}, 70%, 95%)`;
                    const textColor = `hsl(${hue}, 70%, 25%)`;
                    
                    return (
                      <div 
                        key={idx}
                        className="flex bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
                      >
                        <div 
                          className="w-2" 
                          style={{ backgroundColor: bgColor }}
                        ></div>
                        <div className="flex items-start p-4 w-full">
                          <div 
                            className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold mr-3"
                            style={{ backgroundColor: bgColor, color: textColor }}
                          >
                            {name.charAt(0)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium truncate">{name}</p>
                            {affiliation && (
                              <p className="text-sm text-gray-600 mt-1 truncate">{affiliation}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
          
          {filteredCommitteeData.length === 0 && searchTerm && (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-lg font-medium mb-4">No matches found</p>
              <p className="text-gray-600 mb-6">Try another search term or browse all committees</p>
              <button 
                onClick={() => setSearchTerm("")} 
                className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                View All Committees
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Back to Top Button */}
      {isScrolled && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 p-3 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors z-20"
          aria-label="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
      
      {/* Footer */}
      <div className="border-t border-gray-200 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center">
          <p className="text-sm text-gray-600">
            For inquiries about the committee, please contact <span className="font-medium">springerconference@srcas.ac.in</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Committee;