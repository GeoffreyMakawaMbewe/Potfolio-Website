// Simple PDF generation script
// This script uses Playwright to generate a PDF from the resume HTML

import { chromium } from 'playwright';

async function generatePDF() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Navigate to the resume page
  await page.goto('http://localhost:5173/resume.html', {
    waitUntil: 'networkidle'
  });
  
  // Wait for fonts to load
  await page.waitForTimeout(1000);
  
  // Generate PDF
  await page.pdf({
    path: 'public/Geoffrey_Makawa_Resume.pdf',
    format: 'A4',
    margin: {
      top: '0.5in',
      right: '0.5in',
      bottom: '0.5in',
      left: '0.5in'
    },
    printBackground: true,
    preferCSSPageSize: false
  });
  
  console.log('PDF generated successfully at public/Geoffrey_Makawa_Resume.pdf');
  
  await browser.close();
}

generatePDF().catch(error => {
  console.error('Error generating PDF:', error);
  process.exit(1);
});
