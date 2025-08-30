# FCCU Transcript Analyzer

## Overview
This system extends your existing FCCU degree audit checklist viewer with automatic transcript analysis capabilities. Students can upload their transcripts and get a detailed breakdown of their degree progress.

## Features

### Current Features
- **PDF Transcript Upload**: Drag & drop or select PDF transcripts
- **AI-Enhanced Parsing**: Optional OpenAI integration for better accuracy
- **Automatic Course Parsing**: Extracts course codes, names, and grades
- **Smart Course Matching**: Handles variations in course code formats
- **Progress Tracking**: Shows completed vs remaining requirements by category
- **GPA Calculation**: Calculates GPA from completed courses
- **Visual Progress**: Progress bars and categorized course lists
- **Demo Mode**: Test with sample data
- **All 27 Majors**: Complete dropdown with all FCCU majors

### Supported Majors
All 27 FCCU majors including:
- Computer Science, Business, Psychology
- Biology, Chemistry, Physics, Mathematics
- Economics, English Literature, History
- And 18 more majors with fallback analysis

## How It Works

### 1. Course Requirements Database
The `course-requirements.js` file contains structured course requirements for each major:

```javascript
"Computer Science": {
  "Core Courses": [
    { code: "CS-101", name: "Introduction to Programming", credits: 3 },
    // ... more courses
  ],
  "Mathematics": [
    { code: "MATH-101", name: "Calculus I", credits: 3 },
    // ... more courses
  ]
}
```

### 2. Transcript Parsing
The system uses multiple regex patterns to extract courses from transcript text:
- Standard format: `CS-101`, `CS 101`, `CS101`
- With grades: `CS-101 A`, `CS-101 (B+)`
- Full names: `"Introduction to Programming CS-101"`

### 3. Progress Analysis
Compares completed courses against requirements and calculates:
- Overall progress percentage
- Completed/remaining courses by category
- GPA from graded courses
- Credit hours completed

## Expanding the System

### Adding New Majors

1. **Add course requirements** in `course-requirements.js`:
```javascript
"Biology": {
  "Core Courses": [
    { code: "BIO-101", name: "General Biology I", credits: 3 },
    { code: "BIO-102", name: "General Biology II", credits: 3 }
  ],
  "Chemistry": [
    { code: "CHEM-101", name: "General Chemistry I", credits: 3 }
  ]
}
```

2. **Add to dropdown** in `transcript-analyzer.html`:
```html
<option value="Biology">Biology</option>
```

### Parsing Your Actual Checklist PDFs

To automatically extract requirements from your existing checklist PDFs:

1. **Server-side PDF parsing** (recommended):
   ```javascript
   // Using Node.js with pdf-parse
   const fs = require('fs');
   const pdf = require('pdf-parse');
   
   async function parseChecklistPDF(filePath) {
     const dataBuffer = fs.readFileSync(filePath);
     const data = await pdf(dataBuffer);
     return extractCourseRequirements(data.text);
   }
   ```

2. **Client-side parsing** (current approach):
   - Uses PDF.js to extract text
   - Requires manual regex patterns for each PDF format

### Improving Transcript Parsing

Current parsing handles basic formats. To improve:

1. **Add more patterns** in `course-requirements.js`:
```javascript
const coursePatterns = {
  // Add patterns for your specific transcript format
  fccu: /([A-Z]{2,4})[-\s]?(\d{3})[\s:]*([A-F][+-]?)/g,
  // Add semester/year parsing
  semester: /(Fall|Spring|Summer)\s+(\d{4})/g
}
```

2. **Handle different transcript formats**:
   - Table-based transcripts
   - Different grade scales
   - Transfer credits
   - Prerequisites tracking

### Database Integration

For production use, consider:

1. **Backend API**:
   ```javascript
   // Express.js example
   app.post('/api/analyze-transcript', upload.single('transcript'), async (req, res) => {
     const transcriptText = await extractPDFText(req.file);
     const courses = parseTranscriptCourses(transcriptText);
     const analysis = analyzeDegreeProgress(courses, req.body.major);
     res.json(analysis);
   });
   ```

2. **Database storage**:
   - Store course requirements
   - Save student progress
   - Track historical data

## Technical Requirements

### Current Stack
- **Frontend**: HTML, CSS (Tailwind), Vanilla JavaScript
- **PDF Processing**: PDF.js (client-side)
- **No backend required** for basic functionality

### For Production
- **Backend**: Node.js/Express, Python/Flask, or similar
- **Database**: PostgreSQL, MongoDB, or similar
- **File Storage**: AWS S3, local storage, or similar
- **Authentication**: For student accounts

## Testing

Use the included `sample-transcript.txt` to test the parsing logic:
1. Convert to PDF or copy content into a PDF
2. Upload through the interface
3. Select "Computer Science" as major
4. Verify parsing results

## Next Steps

1. **Parse your actual checklist PDFs** to populate requirements
2. **Test with real transcripts** to refine parsing patterns  
3. **Add more majors** from your existing checklist collection
4. **Consider backend integration** for production deployment
5. **Add features** like:
   - Prerequisite checking
   - Course scheduling suggestions
   - Transfer credit handling
   - Academic advisor notifications

## Files Structure

```
html test/
├── index.html                 # Main checklist viewer (updated)
├── transcript-analyzer.html   # New transcript analyzer
├── course-requirements.js     # Course requirements database
├── sample-transcript.txt      # Test data
└── README.md                 # This file
```

The system is designed to be modular and extensible. Start with the basic functionality and gradually add more sophisticated features as needed.