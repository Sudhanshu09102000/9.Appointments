const totalQuestions = 47;   // total appointments extracted
let currentQuestion = 1;
const answers = {};
let totalSeconds = 0;

const questions = {
  1: {
    text: "Who has been appointed as the new Director General of CRPF?",
    options: ["Vineet Joshi", "Ajay Seth", "Gyanendra Pratap Singh", "Bahadur Singh Sago"],
    correct: "3"
  },
  2: {
    text: "Who has been appointed as the new Chairman of CBSE?",
    options: ["Vineet Joshi", "Manish Singhal", "Devarjit Saikia", "Ajay Seth"],
    correct: "1"
  },
  3: {
    text: "Who became the new Secretary General of ASSOCHAM (Associated Chambers of Commerce and Industry of India)?",
    options: ["Ajay Seth", "Bahadur Singh Sago", "Raghuram Iyer", "Manish Singhal"],
    correct: "4"
  },
  4: {
    text: "Who has been appointed as the Secretary of BCCI?",
    options: ["Devarjit Saikia", "Roger Binny", "Jay Shah", "Ajay Seth"],
    correct: "1"
  },
  5: {
    text: "Who has become the new Finance Secretary of India?",
    options: ["Ajay Seth", "Vineet Joshi", "Gyanendra Pratap Singh", "Sanjay Malhotra"],
    correct: "1"
  },
  6: {
    text: "Who has been named as Fit India Icon by Union Sports Minister Mansukh Mandaviya?",
    options: ["PV Sindhu", "Ayushmann Khurrana", "Neeraj Chopra", "Diljit Dosanjh"],
    correct: "2"
  },
  7: {
    text: "Who has been appointed as the President of the Athletics Federation of India?",
    options: ["Bahadur Singh Sago", "Shirley Ayorkor Botchwey", "PT Usha", "Raghuram Iyer"],
    correct: "1"
  },
  8: {
    text: "Who became the first female and first African President of the International Olympic Committee?",
    options: ["Christie Coventry", "Shirley Ayorkor Botchwey", "PT Usha", "Dimitri Viklas"],
    correct: "1"
  },
  9: {
    text: "Who is the first female President of the Indian Olympic Association?",
    options: ["Christie Coventry", "PT Usha", "Anju Rathi Rana", "Poonam Gupta"],
    correct: "2"
  },
  10: {
    text: "Who has been appointed CEO of the Indian Olympic Association?",
    options: ["Sanjog Gupta", "Manish Singhal", "Ajay Seth", "Raghuram Iyer"],
    correct: "4"
  },
  11: {
    text: "Who has been appointed as the new Deputy Governor of RBI?",
    options: ["Sanjay Malhotra", "Poonam Gupta", "Tuhin kanta Pandey", "CS Shetty"],
    correct: "2"
  },
  12: {
    text: "Who has been appointed as the new Chairperson of SEBI?",
    options: ["Madhabi Puri Buch", "Punam Pandey", "Tuhin kanta Pandey", "Ajay Seth"],
    correct: "3"
  },
  13: {
    text: "Who is set to become the first Indian astronaut to travel to the International Space Station under NASA’s Axiom 4 Mission?",
    options: ["Subhanshu Shukla", "Peggy Whitson", "Slavs", "Tibor Kapu"],
    correct: "1"
  },
  14: {
    text: "Who has been appointed as the new Director of FBI (Federal Bureau of Investigation)?",
    options: ["Ram Singh", "Christopher Wray", "Ajay Seth", "Kash Patel"],
    correct: "4"
  },
  15: {
    text: "Who became India’s first woman Law Secretary?",
    options: ["Anju Rathi Rana", "Poonam Gupta", "Tuhin Kanta Pandey", "Leela Seth"],
    correct: "1"
  },
  16: {
    text: "Who has been elected as Chairman of Indian Banks Association?",
    options: ["Nathuram Singh", "Ajay Seth", "Vipin Kumar", "CS Shetty"],
    correct: "4"
  },
  17: {
    text: "Who has been appointed as the Controller General of Defence Accounts?",
    options: ["Sanjay Murthy", "SS Dubey", "Dr. Mayank Sharma", "Sanjay Malhotra"],
    correct: "3"
  },
  18: {
    text: "Who has been appointed as the 26th Chief Election Commissioner of India?",
    options: ["Rajiv Kumar", "Gyanesh Kumar", "Sukumar Sen", "Vivek Joshi"],
    correct: "2"
  },
  19: {
    text: "Who has been appointed as the new Election Commissioner of India?",
    options: ["Vivek Joshi", "Rajiv Kumar", "Sukumar Sen", "Sanjay Malhotra"],
    correct: "1"
  },
  20: {
    text: "Who has been appointed as the CEO of Delhi Waqf Board?",
    options: ["Azimul Haque", "Faiz Ahmed Kidwai", "Sitashu Kotak", "Sonali Mishra"],
    correct: "1"
  },
  21: {
    text: "Who has been appointed as the Director General of Civil Aviation?",
    options: ["Sitashu Kotak", "Ajay Seth", "Azimul Haque", "Faiz Ahmed Kidwai"],
    correct: "4"
  },
  22: {
    text: "Who has been appointed as the Batting Coach of Team India?",
    options: ["Sitashu Kotak", "Gautam Gambhir", "Morne Morkel", "Rahul Dravid"],
    correct: "1"
  },
  23: {
    text: "Who has become the first female Director General of Railway Protection Force (RPF)?",
    options: ["Berumi Mishra", "PT Usha", "Sonali Mishra", "Shirley Ayorkor Botchwey"],
    correct: "3"
  },
  24: {
    text: "Who has been appointed as the Commonwealth Secretary General, becoming the first African woman to hold the post?",
    options: [ "Christie Coventry", "PT Usha", "Shirley Ayorkor Botchwey", "Sonali Mishra"],
    correct: "3"
  },
  25: {
    text: "Who has been appointed as the CEO of UIDAI (Unique Identification Authority of India)?",
    options: ["Bhuvnesh Kumar", "Ajay Seth", "Vipin Kumar", "Mayank Sharma"],
    correct: "1"
  },
  26: {
    text: "Who has been appointed as the 52nd Chief Justice of India?",
    options: ["DY Chandrachud", "BV Nagarathna", "HJK Kania" , "BR Gavai"],
    correct: "4"
  },
  27: {
    text: "Who will most likely become the first female Chief Justice of India in 2027?",
    options: ["Ramesh Ram", "Leela Seth", "BV Nagarathna", "Anju Rathi Rana"],
    correct: "3"
  },
  28: {
    text: "Who has been re-elected as the President of the International Hockey Federation (FIH)?",
    options: ["Tayyab Ikram", "Shirley Ayorkor Botchwey", "Christie Coventry", "Ajay Seth"],
    correct: "1"
  },
  29: {
    text: "Who has been appointed as the DG of Indian Council of Agricultural Research (ICAR)?",
    options: [ "Ajay Seth", "Vipin Kumar", "Mayank Sharma", "Dr. Mangilal Jat"],
    correct: "4"
  },
  30: {
    text: "Who has been appointed as Chairperson of a Commission with the Indian Weightlifting Federation?",
    options: ["Mirabai Chanu", "Neeraj Chopra", "PV Sindhu", "Ayushmann Khurrana"],
    correct: "1"
  },
  31: {
    text: "Who has been appointed as the President of the Asian Cricket Council (ACC)?",
    options: ["Jay Shah", "Sanjog Gupta", "Roger Binny", "Mosin Naqvi"],
    correct: "4"
  },
  32: {
    text: "Who has been appointed as the new Chairperson of the National Human Rights Commission (NHRC)?",
    options: ["Justice V Ramasubramanian", "Justice DY Chandrachud", "Justice Dinesh Maheshwari", "Justice Suryakant"],
    correct: "1"
  },
  33: {
    text: "Who has been appointed as the new RBI Governor?",
    options: [ "Shaktikanta Das", "CS Shetty", "Ajay Seth" , "Sanjay Malhotra"],
    correct: "4"
  },
  34: {
    text: "Who has been appointed as the Chairperson of the UN International Justice Council?",
    options: ["Justice Madan Lokur", "Justice DY Chandrachud", "Justice Suryakant", "Justice Ramasubramanian"],
    correct: "1"
  },
  35: {
    text: "Who became the first Chairman of the newly launched National Turmeric Board?",
    options: [ "Ajay Seth", "Palle Ganga Reddy", "Vipin Kumar", "Mayank Sharma"],
    correct: "2"
  },
  36: {
    text: "Who has been appointed as the President of FICCI (Federation of Indian Chambers of Commerce and Industry)?",
    options: ["Harshvardhan Agrawal", "Manish Singhal", "Ajay Seth", "Vipin Kumar"],
    correct: "1"
  },
  37: {
    text: "Who has become the new Chairman of UPSC?",
    options: [ "Preeti Sudan", "Justice Suryakant", "Vipin Kumar", "Dr. Ajay Kumar"],
    correct: "4"
  },
  38: {
    text: "Who has been appointed as the new CAG of India?",
    options: ["K Sanjay Murthy", "SS Dubey", "Sanjay Malhotra", "Ajay Seth"],
    correct: "1"
  },
  39: {
    text: "Who has been elected as the new Secretary General of INTERPOL?",
    options: [ "Ashish Khanna", "Shirley Ayorkor Botchwey", "Ajay Seth", "Veldacy Urquiza"],
    correct: "4"
  },
  40: {
    text: "Who has been appointed as the DG of the International Solar Alliance?",
    options: ["Rashi Kumar", "Ashish Khanna", "Ajay Seth", "CS Shetty"],
    correct: "2"
  },
  41: {
    text: "Who has been appointed as the Chairman of Airports Authority of India?",
    options: ["Ajay Seth", "Ashish Khanna", "Vipin Kumar", "Mayank Sharma"],
    correct: "3"
  },
  42: {
    text: "Who has been appointed as the new Chairman of Tata Trusts?",
    options: ["Noel Tata", "N Chandrasekaran", "Ratan Tata", "Ajay Seth"],
    correct: "1"
  },
  43: {
    text: "Who has been appointed as the Executive Chairman of NALSA?",
    options: ["Justice JJ Menon", "Justice DY Chandrachud", "Justice Madan Lokur", "Justice Suryakant"],
    correct: "4"
  },
  44: {
    text: "Who has been appointed as the Chairman of the 23rd Law Commission of India?",
    options: ["Justice Dinesh Maheshwari", "Justice Ramasubramanian", "Justice DY Chandrachud", "Justice Madan Lokur"],
    correct: "1"
  },
  45: {
    text: "Who has been named as the new Test Captain of India’s men’s cricket team?",
    options: ["Rohit Sharma", "Virat Kohli", "Shubman Gill", "KL Rahul"],
    correct: "3"
  },
  46: {
    text: "Who has been appointed as the new Pope of the Catholic Church?",
    options: ["Cardinal Robert Francis Prevost", "Pope Francis", "Meo Zuzz", "Dalai Lama"],
    correct: "1"
  },
  47: {
    text: "Who has been appointed as the new Director of Marine Products Export Development Authority (MPEDA)?",
    options: ["RR shetty", "Vipin Kumar", "Ajay Seth", "Ram Mohan"],
    correct: "4"
  }
};

const explanations = {
  1: "Gyanendra Pratap Singh was appointed as DG of CRPF, the largest CAPF of India.",
  2: "Vineet Joshi has become the new Chairman of CBSE.",
  3: "Manish Singhal appointed as Secretary General of ASSOCHAM.",
  4: "Devarjit Saikia appointed as BCCI Secretary. BCCI was founded in 1928.",
  5: "Ajay Seth appointed as Finance Secretary.",
  6: "Ayushmann Khurrana named Fit India Icon by Union Sports Minister.",
  7: "Bahadur Singh Sago became President of Athletics Federation of India.",
  8: "Christie Coventry became the first female and first African IOC President.",
  9: "PT Usha became the first female President of Indian Olympic Association.",
  10: "Raghuram Iyer appointed CEO of Indian Olympic Association.",
  11: "Poonam Gupta appointed Deputy Governor of RBI for 3 years.",
  12: "Tuhin kanta Pandey became Chairperson of SEBI.",
  13: "Subhanshu Shukla became first Indian astronaut to ISS with Axiom 4 Mission.",
  14: "Kash Patel appointed Director of FBI.",
  15: "Anju Rathi Rana became India’s first woman Law Secretary.",
  16: "CS Shetty (SBI Chairman) elected Chairman of Indian Banks Association.",
  17: "Dr. Mayank Sharma appointed Controller General of Defence Accounts.",
  18: "Gyanesh Kumar appointed 26th CEC of India.",
  19: "Vivek Joshi appointed as Election Commissioner.",
  20: "Azimul Haque appointed CEO of Delhi Waqf Board.",
  21: "Faiz Ahmed Kidwai appointed DG of Civil Aviation.",
  22: "Sitashu Kotak appointed Batting Coach of Team India.",
  23: "Sonali Mishra became first woman DG of RPF.",
  24: "Shirley Ayorkor Botchwey became first African woman Commonwealth Secretary General.",
  25: "Bhuvnesh Kumar appointed CEO of UIDAI (Aadhaar).",
  26: "BR Gavai became 52nd Chief Justice of India.",
  27: "BV Nagarathna set to become first female CJI in 2027.",
  28: "Tayyab Ikram re-elected President of FIH.",
  29: "Dr. Mangilal Jat appointed DG of ICAR.",
  30: "Mirabai Chanu appointed Chairperson in Indian Weightlifting Federation.",
  31: "Mosin Naqvi (Pakistan) appointed President of ACC.",
  32: "Justice V Ramasubramanian appointed NHRC Chairperson.",
  33: "Sanjay Malhotra appointed RBI Governor.",
  34: "Justice Madan Lokur appointed Chairperson of UN International Justice Council.",
  35: "Palle Ganga Reddy became first Chairman of National Turmeric Board.",
  36: "Harshvardhan Agrawal became President of FICCI (founded 1927).",
  37: "Dr. Ajay Kumar became UPSC Chairman, succeeding Preeti Sudan.",
  38: "K Sanjay Murthy became new CAG of India.",
  39: "Veldacy Urquiza became Secretary General of INTERPOL.",
  40: "Ashish Khanna appointed DG of International Solar Alliance.",
  41: "Vipin Kumar appointed Chairman of Airports Authority of India.",
  42: "Noel Tata appointed Chairman of Tata Trusts.",
  43: "Justice Suryakant appointed Executive Chairman of NALSA.",
  44: "Justice Dinesh Maheshwari appointed Chairman of 23rd Law Commission.",
  45: "Shubman Gill became new Test Captain of Indian men’s cricket team.",
  46: "Cardinal Robert Francis Prevost appointed Pope of Catholic Church, Leo XIV.",
  47: "Ram Mohan appointed Director of MPEDA."
};

function showExplanation(num) {
  const q = questions[num];
  const e = explanations[num] || "No explanation provided.";
  if (!q) return;
  document.getElementById('explanationContent').innerHTML = `
    <p><strong>Q${num}.</strong> ${q.text}</p>
    <p><strong>Options:</strong></p>
    <ul>
      ${q.options.map((opt, idx) => `<li>${idx+1}. ${opt}</li>`).join('')}
    </ul>
    <p><strong>Correct Answer:</strong> ${q.options[parseInt(q.correct)-1]}</p>
    <hr>
    <p><strong>Explanation:</strong> ${e}</p>
  `;
  // Show modal (requires bootstrap js)
  const modalEl = document.getElementById('explanationModal');
  if (modalEl && typeof bootstrap !== 'undefined') {
    new bootstrap.Modal(modalEl).show();
  }
}

// Export for module usage (if using modules)
if (typeof module !== 'undefined') {
  module.exports = { totalQuestions, questions, explanations, showExplanation };
}
