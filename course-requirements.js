// Course requirements database
// This would eventually be populated by parsing your checklist PDFs

const courseRequirements = {
    "Computer Science": {
        "Core Courses (19 required)": [
            { code: "COMP-102", credits: 3 },
            { code: "COMP-111", credits: 3 },
            { code: "COMP-113", credits: 3 },
            { code: "COMP-200", credits: 3 },
            { code: "COMP-206", credits: 3 },
            { code: "COMP-213", credits: 3 },
            { code: "COMP-220", credits: 3 },
            { code: "COMP-300", credits: 3 },
            { code: "COMP-301", credits: 3 },
            { code: "COMP-302", credits: 3 },
            { code: "COMP-303", credits: 3 },
            { code: "COMP-311", credits: 3 },
            { code: "COMP-360", credits: 3 },
            { code: "COMP-401", credits: 3 },
            { code: "COMP-410", credits: 3 },
            { code: "COMP-421", credits: 3 },
            { code: "COMP-451", credits: 3 },
            { code: "COMP-497A", credits: 3 },
            { code: "COMP-497B", credits: 3 }
        ],
        "Supporting Courses (7 required)": [
            { code: "MATH-111", credits: 3 },
            { code: "STAT-115", credits: 3 },
            { code: "CSCS-105", credits: 3 },
            { code: "CSCS-201", credits: 3 },
            { code: "CSCS-202", credits: 3 },
            { code: "CSCS-203", credits: 3 },
            { code: "CSCS-320", credits: 3 }
        ],
        "General Education": [
            { code: "UNIV-100", credits: 3 },
            { code: "WRCM-101", credits: 3 },
            { code: "WRCM-102", credits: 3 },
            { code: "URDU-101", credits: 3 },
            { code: "PKST-101", credits: 3 }
        ],
        "Religious Studies (Choose One)": [
            { code: "ISLM-101", credits: 3 },
            { code: "CRST-152", credits: 3 }
        ],
        "Humanities (2 required)": [
            { code: "PHIL-XXX", credits: 3 },
            { code: "MCOM-XXX", credits: 3 },
            { code: "URDU-XXX", credits: 3 },
            { code: "ENGL-XXX", credits: 3 },
            { code: "HIST-XXX", credits: 3 },
            { code: "ARTS-XXX", credits: 3 },
            { code: "MUSC-XXX", credits: 3 }
        ],
        "Social Sciences (2 required)": [
            { code: "SOCL-XXX", credits: 3 },
            { code: "PSYC-XXX", credits: 3 },
            { code: "GEOG-XXX", credits: 3 },
            { code: "PLSC-XXX", credits: 3 },
            { code: "ECON-XXX", credits: 3 },
            { code: "EDUC-XXX", credits: 3 },
            { code: "BUSN-XXX", credits: 3 }
        ],
        "Science Lab (1 required, NOT Physics)": [
            { code: "BIOL-XXX", credits: 4 },
            { code: "CHEM-XXX", credits: 4 },
            { code: "GEOL-XXX", credits: 4 }
        ],
        "Major Electives (4 courses)": [
            { code: "COMP-XXX", credits: 3 },
            { code: "CSCS-XXX", credits: 3 }
        ]
    },

    "Business": {
        "Core Courses": [
            { code: "BUS-101", name: "Introduction to Business", credits: 3 },
            { code: "BUS-102", name: "Business Communication", credits: 3 },
            { code: "BUS-201", name: "Marketing Principles", credits: 3 },
            { code: "BUS-202", name: "Management Principles", credits: 3 },
            { code: "BUS-301", name: "Strategic Management", credits: 3 },
            { code: "BUS-302", name: "International Business", credits: 3 }
        ],
        "Economics & Finance": [
            { code: "ECON-101", name: "Microeconomics", credits: 3 },
            { code: "ECON-102", name: "Macroeconomics", credits: 3 },
            { code: "FIN-201", name: "Corporate Finance", credits: 3 },
            { code: "ACC-101", name: "Financial Accounting", credits: 3 },
            { code: "ACC-102", name: "Managerial Accounting", credits: 3 }
        ],
        "General Education": [
            { code: "ENG-101", name: "English Composition I", credits: 3 },
            { code: "ENG-102", name: "English Composition II", credits: 3 },
            { code: "MATH-101", name: "Business Mathematics", credits: 3 },
            { code: "STAT-101", name: "Business Statistics", credits: 3 }
        ]
    },

    "Psychology": {
        "Core Courses": [
            { code: "PSY-101", name: "Introduction to Psychology", credits: 3 },
            { code: "PSY-102", name: "Research Methods", credits: 3 },
            { code: "PSY-201", name: "Developmental Psychology", credits: 3 },
            { code: "PSY-202", name: "Social Psychology", credits: 3 },
            { code: "PSY-301", name: "Cognitive Psychology", credits: 3 },
            { code: "PSY-302", name: "Abnormal Psychology", credits: 3 }
        ],
        "Research & Statistics": [
            { code: "STAT-101", name: "Statistics for Psychology", credits: 3 },
            { code: "STAT-102", name: "Advanced Statistics", credits: 3 },
            { code: "PSY-401", name: "Experimental Psychology", credits: 3 }
        ],
        "General Education": [
            { code: "ENG-101", name: "English Composition I", credits: 3 },
            { code: "ENG-102", name: "English Composition II", credits: 3 },
            { code: "BIO-101", name: "Biology", credits: 3 },
            { code: "SOC-101", name: "Sociology", credits: 3 },
            { code: "PHIL-101", name: "Philosophy", credits: 3 }
        ]
    },

    "Biology": {
        "Core Courses": [
            { code: "BIO-101", name: "General Biology I", credits: 3 },
            { code: "BIO-102", name: "General Biology II", credits: 3 },
            { code: "BIO-201", name: "Cell Biology", credits: 3 },
            { code: "BIO-202", name: "Genetics", credits: 3 },
            { code: "BIO-301", name: "Ecology", credits: 3 },
            { code: "BIO-302", name: "Evolution", credits: 3 }
        ],
        "Chemistry": [
            { code: "CHEM-101", name: "General Chemistry I", credits: 3 },
            { code: "CHEM-102", name: "General Chemistry II", credits: 3 },
            { code: "CHEM-201", name: "Organic Chemistry I", credits: 3 },
            { code: "CHEM-202", name: "Organic Chemistry II", credits: 3 }
        ],
        "Mathematics & Physics": [
            { code: "MATH-101", name: "Calculus I", credits: 3 },
            { code: "MATH-102", name: "Statistics", credits: 3 },
            { code: "PHY-101", name: "Physics I", credits: 3 },
            { code: "PHY-102", name: "Physics II", credits: 3 }
        ],
        "General Education": [
            { code: "ENG-101", name: "English Composition I", credits: 3 },
            { code: "ENG-102", name: "English Composition II", credits: 3 }
        ]
    },

    "Mathematics": {
        "Core Courses": [
            { code: "MATH-101", name: "Calculus I", credits: 3 },
            { code: "MATH-102", name: "Calculus II", credits: 3 },
            { code: "MATH-201", name: "Calculus III", credits: 3 },
            { code: "MATH-202", name: "Linear Algebra", credits: 3 },
            { code: "MATH-301", name: "Abstract Algebra", credits: 3 },
            { code: "MATH-302", name: "Real Analysis", credits: 3 }
        ],
        "Applied Mathematics": [
            { code: "MATH-401", name: "Differential Equations", credits: 3 },
            { code: "MATH-402", name: "Numerical Analysis", credits: 3 },
            { code: "STAT-301", name: "Probability Theory", credits: 3 },
            { code: "STAT-302", name: "Mathematical Statistics", credits: 3 }
        ],
        "General Education": [
            { code: "ENG-101", name: "English Composition I", credits: 3 },
            { code: "ENG-102", name: "English Composition II", credits: 3 },
            { code: "PHY-101", name: "Physics I", credits: 3 },
            { code: "CS-101", name: "Introduction to Programming", credits: 3 }
        ]
    },

    "Physics": {
        "Core Courses": [
            { code: "PHY-101", name: "Physics I", credits: 3 },
            { code: "PHY-102", name: "Physics II", credits: 3 },
            { code: "PHY-201", name: "Modern Physics", credits: 3 },
            { code: "PHY-202", name: "Thermodynamics", credits: 3 },
            { code: "PHY-301", name: "Quantum Mechanics", credits: 3 },
            { code: "PHY-302", name: "Electromagnetism", credits: 3 }
        ],
        "Mathematics": [
            { code: "MATH-101", name: "Calculus I", credits: 3 },
            { code: "MATH-102", name: "Calculus II", credits: 3 },
            { code: "MATH-201", name: "Calculus III", credits: 3 },
            { code: "MATH-301", name: "Differential Equations", credits: 3 }
        ],
        "General Education": [
            { code: "ENG-101", name: "English Composition I", credits: 3 },
            { code: "ENG-102", name: "English Composition II", credits: 3 },
            { code: "CHEM-101", name: "General Chemistry", credits: 3 }
        ]
    },

    "Chemistry": {
        "Core Courses": [
            { code: "CHEM-101", name: "General Chemistry I", credits: 3 },
            { code: "CHEM-102", name: "General Chemistry II", credits: 3 },
            { code: "CHEM-201", name: "Organic Chemistry I", credits: 3 },
            { code: "CHEM-202", name: "Organic Chemistry II", credits: 3 },
            { code: "CHEM-301", name: "Physical Chemistry", credits: 3 },
            { code: "CHEM-302", name: "Analytical Chemistry", credits: 3 }
        ],
        "Mathematics & Physics": [
            { code: "MATH-101", name: "Calculus I", credits: 3 },
            { code: "MATH-102", name: "Calculus II", credits: 3 },
            { code: "PHY-101", name: "Physics I", credits: 3 },
            { code: "PHY-102", name: "Physics II", credits: 3 }
        ],
        "General Education": [
            { code: "ENG-101", name: "English Composition I", credits: 3 },
            { code: "ENG-102", name: "English Composition II", credits: 3 },
            { code: "BIO-101", name: "Biology", credits: 3 }
        ]
    },

    "Economics": {
        "Core Courses": [
            { code: "ECON-101", name: "Microeconomics", credits: 3 },
            { code: "ECON-102", name: "Macroeconomics", credits: 3 },
            { code: "ECON-201", name: "Intermediate Microeconomics", credits: 3 },
            { code: "ECON-202", name: "Intermediate Macroeconomics", credits: 3 },
            { code: "ECON-301", name: "Econometrics", credits: 3 },
            { code: "ECON-302", name: "International Economics", credits: 3 }
        ],
        "Mathematics & Statistics": [
            { code: "MATH-101", name: "Calculus I", credits: 3 },
            { code: "MATH-102", name: "Calculus II", credits: 3 },
            { code: "STAT-101", name: "Statistics", credits: 3 },
            { code: "STAT-201", name: "Business Statistics", credits: 3 }
        ],
        "General Education": [
            { code: "ENG-101", name: "English Composition I", credits: 3 },
            { code: "ENG-102", name: "English Composition II", credits: 3 },
            { code: "BUS-101", name: "Introduction to Business", credits: 3 }
        ]
    }
};

// Course parsing patterns for different transcript formats
const coursePatterns = {
    // FCCU format: COMP 102, WRCM 101, CSCS 105
    fccu: /([A-Z]{2,4})\s+(\d{3})/g,

    // Standard format: CS-101, CS 101, CS101
    standard: /([A-Z]{2,4})[-\s]?(\d{3})/g,

    // With grades: COMP 102 C, WRCM 101 CC
    withGrades: /([A-Z]{2,4})\s+(\d{3})\s+([A-F][+-]?|CC|P|F|E|I|W|H|G)/g,

    // Full course names: "Programming I COMP 102"
    withNames: /([A-Z][a-z\s]+)\s+([A-Z]{2,4})\s+(\d{3})/g
};

// Grade point mapping (FCCU system)
const gradePoints = {
    'A+': 4.0, 'A': 4.0, 'A-': 3.7,
    'B+': 3.3, 'B': 3.0, 'B-': 2.7,
    'C+': 2.3, 'C': 2.0, 'C-': 1.7, 'CC': 2.0,
    'D+': 1.3, 'D': 1.0, 'F': 0.0, 'E': 0.0,
    'P': null, 'I': null, 'W': null, 'H': 4.0, 'G': 0.0
};

// Function to get all requirements for a major
function getMajorRequirements(major) {
    return courseRequirements[major] || {};
}

// Function to get flattened list of all required courses
function getFlatRequirements(major) {
    const requirements = getMajorRequirements(major);
    const allCourses = [];

    Object.values(requirements).forEach(category => {
        allCourses.push(...category);
    });

    return allCourses;
}

// Function to parse courses from transcript text
function parseTranscriptCourses(text) {
    const courses = [];

    // Try FCCU format with grades first
    let matches = text.match(coursePatterns.withGrades);
    if (matches) {
        matches.forEach(match => {
            const parts = match.match(/([A-Z]{2,4})\s+(\d{3})\s+([A-F][+-]?|CC|P|F|E|I|W|H|G)/);
            if (parts) {
                courses.push({
                    code: `${parts[1]}-${parts[2]}`,
                    grade: parts[3],
                    points: gradePoints[parts[3]] || 0,
                    name: `${parts[1]} ${parts[2]} Course`
                });
            }
        });
    }

    // Try FCCU format without grades
    if (courses.length === 0) {
        matches = text.match(coursePatterns.fccu);
        if (matches) {
            matches.forEach(match => {
                const parts = match.match(/([A-Z]{2,4})\s+(\d{3})/);
                if (parts) {
                    courses.push({
                        code: `${parts[1]}-${parts[2]}`,
                        grade: null,
                        points: null,
                        name: `${parts[1]} ${parts[2]} Course`
                    });
                }
            });
        }
    }

    // Fallback to standard pattern
    if (courses.length === 0) {
        matches = text.match(coursePatterns.standard);
        if (matches) {
            matches.forEach(match => {
                const parts = match.match(/([A-Z]{2,4})[-\s]?(\d{3})/);
                if (parts) {
                    courses.push({
                        code: `${parts[1]}-${parts[2]}`,
                        grade: null,
                        points: null,
                        name: `${parts[1]} ${parts[2]} Course`
                    });
                }
            });
        }
    }

    // Remove duplicates
    const uniqueCourses = courses.filter((course, index, arr) =>
        arr.findIndex(c => c.code === course.code) === index
    );

    return uniqueCourses;
}

// Function to analyze degree progress
function analyzeDegreeProgress(transcriptCourses, major) {
    let requirements = getMajorRequirements(major);

    // If no specific requirements found, create a generic analysis
    if (!requirements || Object.keys(requirements).length === 0) {
        requirements = createGenericRequirements(transcriptCourses, major);
    }

    const analysis = {
        major: major,
        categories: {},
        overall: {
            totalRequired: 0,
            totalCompleted: 0,
            totalCredits: 0,
            completedCredits: 0,
            gpa: 0
        }
    };

    let totalGradePoints = 0;
    let totalCreditHours = 0;

    // Track used courses to prevent duplicates
    const usedCourses = new Set();

    // Define category priority (higher priority categories get first pick of courses)
    const categoryPriority = {
        "Core Courses (19 required)": 1,
        "Supporting Courses (7 required)": 2,
        "General Education": 3,
        "Religious Studies (Choose One)": 4,
        "Humanities (2 required)": 5,
        "Social Sciences (2 required)": 6,
        "Science Lab (1 required, NOT Physics)": 7,
        "Major Electives (4 courses)": 8
    };

    // Sort categories by priority
    const sortedCategories = Object.entries(requirements).sort((a, b) => {
        const priorityA = categoryPriority[a[0]] || 999;
        const priorityB = categoryPriority[b[0]] || 999;
        return priorityA - priorityB;
    });

    // Analyze each category in priority order
    sortedCategories.forEach(([categoryName, requiredCourses]) => {
        const completed = [];
        let remaining = [...requiredCourses];

        // Handle special cases
        if (categoryName === "Religious Studies (Choose One)") {
            // Check if student has either ISLM or CRST
            const hasIslm = transcriptCourses.some(tc =>
                matchCourseCode(tc.code, "ISLM-101") && !usedCourses.has(tc.code));
            const hasCrst = transcriptCourses.some(tc =>
                matchCourseCode(tc.code, "CRST-152") && !usedCourses.has(tc.code));

            if (hasIslm || hasCrst) {
                const completedCourse = hasIslm ?
                    requiredCourses.find(rc => rc.code === "ISLM-101") :
                    requiredCourses.find(rc => rc.code === "CRST-152");

                const transcriptCourse = transcriptCourses.find(tc =>
                    matchCourseCode(tc.code, completedCourse.code) && !usedCourses.has(tc.code));

                if (transcriptCourse) {
                    completed.push({
                        ...completedCourse,
                        grade: transcriptCourse.grade,
                        points: transcriptCourse.points
                    });
                    usedCourses.add(transcriptCourse.code);
                    remaining = []; // No remaining since one is completed
                }
            }
        } else if (categoryName === "Major Electives (4 courses)") {
            // Handle major electives - only COMP/CSCS courses not already used
            const availableCourses = transcriptCourses.filter(tc =>
                (tc.code.startsWith("COMP") || tc.code.startsWith("CSCS")) &&
                !usedCourses.has(tc.code)
            );

            // Take up to 4 courses for electives
            const electivesToTake = availableCourses.slice(0, 4);
            electivesToTake.forEach(tc => {
                completed.push({
                    code: tc.code,
                    credits: 3,
                    grade: tc.grade,
                    points: tc.points
                });
                usedCourses.add(tc.code);
            });

            // Calculate remaining electives needed
            const requiredCount = 4;
            remaining = completed.length >= requiredCount ? [] :
                Array(Math.max(0, requiredCount - completed.length)).fill({ code: "COMP-XXX", credits: 3 });

        } else if (categoryName.includes("Humanities") || categoryName.includes("Social Sciences")) {
            // Handle other elective categories
            const prefixes = categoryName.includes("Humanities") ?
                ["PHIL", "MCOM", "URDU", "ENGL", "HIST", "ARTS", "MUSC"] :
                ["SOCL", "PSYC", "GEOG", "PLSC", "ECON", "EDUC", "BUSN"];

            const availableCourses = transcriptCourses.filter(tc =>
                prefixes.some(prefix => tc.code.startsWith(prefix)) &&
                !usedCourses.has(tc.code)
            );

            const requiredCount = categoryName.includes("2 required") ? 2 : requiredCourses.length;
            const coursesToTake = availableCourses.slice(0, requiredCount);

            coursesToTake.forEach(tc => {
                completed.push({
                    code: tc.code,
                    credits: 3,
                    grade: tc.grade,
                    points: tc.points
                });
                usedCourses.add(tc.code);
            });

            remaining = completed.length >= requiredCount ? [] :
                Array(Math.max(0, requiredCount - completed.length)).fill({ code: "XXX-XXX", credits: 3 });

        } else if (categoryName.includes("Science Lab")) {
            // Handle science lab requirement
            const availableCourses = transcriptCourses.filter(tc =>
                (tc.code.startsWith("BIOL") || tc.code.startsWith("CHEM") || tc.code.startsWith("GEOL")) &&
                !usedCourses.has(tc.code)
            );

            if (availableCourses.length > 0) {
                const tc = availableCourses[0];
                completed.push({
                    code: tc.code,
                    credits: 4,
                    grade: tc.grade,
                    points: tc.points
                });
                usedCourses.add(tc.code);
                remaining = [];
            }
        } else {
            // Standard matching for specific courses (Core, Supporting, General Ed)
            requiredCourses.forEach(reqCourse => {
                const transcriptCourse = transcriptCourses.find(tc =>
                    matchCourseCode(tc.code, reqCourse.code) && !usedCourses.has(tc.code)
                );

                if (transcriptCourse) {
                    completed.push({
                        ...reqCourse,
                        grade: transcriptCourse.grade,
                        points: transcriptCourse.points
                    });
                    usedCourses.add(transcriptCourse.code);

                    // Remove from remaining
                    remaining = remaining.filter(rc => rc.code !== reqCourse.code);
                }
            });
        }

        // Calculate GPA for completed courses
        completed.forEach(course => {
            if (course.points !== null && course.points !== undefined) {
                totalGradePoints += course.points * course.credits;
                totalCreditHours += course.credits;
            }
            analysis.overall.completedCredits += course.credits;
        });

        // Calculate progress based on actual requirements
        let progressDenominator = requiredCourses.length;
        if (categoryName === "Major Electives (4 courses)") {
            progressDenominator = 4; // Always 4 courses required for electives
        } else if (categoryName.includes("2 required")) {
            progressDenominator = 2;
        } else if (categoryName === "Religious Studies (Choose One)") {
            progressDenominator = 1;
        }

        analysis.categories[categoryName] = {
            required: requiredCourses,
            completed: completed,
            remaining: remaining,
            progress: progressDenominator > 0 ?
                Math.round((completed.length / progressDenominator) * 100) : 100
        };

        // Add to overall totals using correct counts
        if (categoryName === "Major Electives (4 courses)") {
            analysis.overall.totalRequired += 4;
            analysis.overall.totalCredits += 12;
        } else if (categoryName.includes("2 required")) {
            analysis.overall.totalRequired += 2;
            analysis.overall.totalCredits += 6;
        } else if (categoryName === "Religious Studies (Choose One)") {
            analysis.overall.totalRequired += 1;
            analysis.overall.totalCredits += 3;
        } else {
            analysis.overall.totalRequired += requiredCourses.length;
            analysis.overall.totalCredits += requiredCourses.reduce((sum, course) => sum + course.credits, 0);
        }

        analysis.overall.totalCompleted += completed.length;
    });

    // Calculate overall progress and GPA
    analysis.overall.progress = analysis.overall.totalRequired > 0 ?
        Math.round((analysis.overall.totalCompleted / analysis.overall.totalRequired) * 100) : 0;
    analysis.overall.gpa = totalCreditHours > 0 ? (totalGradePoints / totalCreditHours).toFixed(2) : 0;

    return analysis;
}

// Create generic requirements for majors without specific data
function createGenericRequirements(transcriptCourses, major) {
    const coursesByPrefix = {};

    // Group courses by prefix
    transcriptCourses.forEach(course => {
        const prefix = course.code.split('-')[0];
        if (!coursesByPrefix[prefix]) {
            coursesByPrefix[prefix] = [];
        }
        coursesByPrefix[prefix].push({
            code: course.code,
            name: course.name || `${course.code} Course`,
            credits: 3 // Default credits
        });
    });

    // Create categories based on course prefixes
    const requirements = {};
    Object.entries(coursesByPrefix).forEach(([prefix, courses]) => {
        const categoryName = getCategoryName(prefix);
        requirements[categoryName] = courses;
    });

    // Add common general education if not present
    if (!requirements['General Education']) {
        requirements['General Education'] = [
            { code: "ENG-101", name: "English Composition I", credits: 3 },
            { code: "ENG-102", name: "English Composition II", credits: 3 }
        ];
    }

    return requirements;
}

// Map course prefixes to category names
function getCategoryName(prefix) {
    const categoryMap = {
        'CS': 'Computer Science',
        'MATH': 'Mathematics',
        'PHY': 'Physics',
        'CHEM': 'Chemistry',
        'BIO': 'Biology',
        'ENG': 'English',
        'PSY': 'Psychology',
        'BUS': 'Business',
        'ECON': 'Economics',
        'STAT': 'Statistics',
        'SOC': 'Sociology',
        'HIST': 'History',
        'PHIL': 'Philosophy',
        'POL': 'Political Science',
        'REL': 'Religious Studies',
        'URDU': 'Urdu',
        'GEOG': 'Geography',
        'EDU': 'Education',
        'COMM': 'Communication',
        'ENV': 'Environmental Sciences'
    };

    return categoryMap[prefix] || `${prefix} Courses`;
}

// Enhanced course code matching
function matchCourseCode(transcriptCode, requiredCode) {
    // Normalize both codes
    const normalize = (code) => code.replace(/[-\s]/g, '').toUpperCase();
    const normalizedTranscript = normalize(transcriptCode);
    const normalizedRequired = normalize(requiredCode);

    // Direct match
    if (normalizedTranscript === normalizedRequired) return true;

    // Check if transcript code contains the required code
    if (normalizedTranscript.includes(normalizedRequired)) return true;

    // Check for common variations
    const transcriptParts = transcriptCode.match(/([A-Z]+)[-\s]*(\d+)/);
    const requiredParts = requiredCode.match(/([A-Z]+)[-\s]*(\d+)/);

    if (transcriptParts && requiredParts) {
        const [, tPrefix, tNumber] = transcriptParts;
        const [, rPrefix, rNumber] = requiredParts;

        // Same prefix and number
        if (tPrefix === rPrefix && tNumber === rNumber) return true;

        // Handle common prefix variations
        const prefixVariations = {
            'COMP': 'CS',
            'COMPUTER': 'CS',
            'MATHEMATICS': 'MATH',
            'MATHS': 'MATH',
            'PHYSICS': 'PHY',
            'CHEMISTRY': 'CHEM',
            'BIOLOGY': 'BIO',
            'ENGLISH': 'ENG',
            'PSYCHOLOGY': 'PSY',
            'BUSINESS': 'BUS',
            'ECONOMICS': 'ECON',
            'STATISTICS': 'STAT'
        };

        const normalizedTPrefix = prefixVariations[tPrefix] || tPrefix;
        const normalizedRPrefix = prefixVariations[rPrefix] || rPrefix;

        if (normalizedTPrefix === normalizedRPrefix && tNumber === rNumber) return true;
    }

    return false;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        courseRequirements,
        getMajorRequirements,
        getFlatRequirements,
        parseTranscriptCourses,
        analyzeDegreeProgress
    };
}