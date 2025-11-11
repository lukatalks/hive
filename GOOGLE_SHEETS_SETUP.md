# Google Sheets Form Integration Setup

## Overview
This guide will help you connect the HIVE membership form to Google Sheets so all submissions are automatically logged.

## Method: Using Google Apps Script (Recommended - Free & Easy)

### Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet called "HIVE Membership Applications"
3. In the first row, add these column headers:
   ```
   Timestamp | Full Name | Email | Phone | Birth Date | Residence | Billing Info | About | Employment Status | Company | Role | Activities | Skills | Achievement 1 | Achievement 2 | Achievement 3 | Proudest Achievement | Life Motto | How Learned | Reason | Contribution | Expectations | Goals | References
   ```

### Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    // Create row with timestamp
    const row = [
      new Date(),  // Timestamp
      data.fullname,
      data.email,
      data.phone,
      data.birthdate,
      data.residence,
      data.billing,
      data.about,
      data.employment,
      data.company,
      data.role,
      data.activities,
      data.skills,
      data.achievement1,
      data.achievement2,
      data.achievement3,
      data.proudest,
      data.motto,
      data.how_learned,
      data.reason,
      data.contribution,
      data.expectations,
      data.goals,
      data.references
    ];

    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'success',
        'message': 'Form submitted successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch(error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'error',
        'message': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (💾 icon)
5. Name the project "HIVE Form Handler"

### Step 3: Deploy the Script

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure:
   - **Description**: HIVE Membership Form Handler
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. **IMPORTANT**: Copy the **Web app URL** (starts with `https://script.google.com/...`)
   - Save this URL somewhere safe - you'll need it!
7. Click **Authorize access**
8. Select your Google account
9. Click **Advanced** → **Go to HIVE Form Handler (unsafe)**
10. Click **Allow**

### Step 4: Update form.html

Open `form.html` and find this section (around line 454):

```javascript
// Simulate form submission (replace with actual API call)
setTimeout(() => {
```

Replace the entire form submission function with this:

```javascript
// Form submission handler
document.getElementById('membership-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get submit button
    const submitButton = this.querySelector('.submit-button');

    // Add loading state
    submitButton.classList.add('loading');
    submitButton.textContent = currentLang === 'sl' ? 'Pošiljanje...' : 'Sending...';
    submitButton.disabled = true;

    // Collect form data
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // REPLACE THIS URL WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
    const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';

    // Send to Google Sheets
    fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(() => {
        // Show success popup
        const popup = document.getElementById('success-popup');
        popup.classList.add('show');

        // Apply translations to popup content
        applyTranslations(currentLang);

        // Remove loading state
        submitButton.classList.remove('loading');
        submitButton.disabled = false;

        // Reset form
        this.reset();
    })
    .catch((error) => {
        console.error('Error:', error);
        // Still show success since no-cors mode doesn't return errors
        const popup = document.getElementById('success-popup');
        popup.classList.add('show');
        applyTranslations(currentLang);

        submitButton.classList.remove('loading');
        submitButton.disabled = false;
        this.reset();
    });
});
```

**IMPORTANT**: Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with the Web app URL you copied in Step 3!

### Step 5: Test the Integration

1. Open your website
2. Fill out the membership form
3. Click "Submit Application"
4. Check your Google Sheet - a new row should appear with the submission data!

---

## Alternative Method: Google Forms (Simpler but Less Customizable)

If you prefer to use Google Forms:

1. Create a Google Form with all the same fields
2. Link the form responses to a Google Sheet
3. Update the form's submit button to redirect to the Google Form:

```html
<a href="YOUR_GOOGLE_FORM_URL" class="submit-button" target="_blank">SUBMIT APPLICATION</a>
```

---

## Troubleshooting

### Submissions Not Appearing in Sheet
- Check that the Web app URL is correct in form.html
- Make sure you deployed the script and authorized it
- Check "Execute as: Me" and "Who has access: Anyone"
- Try redeploying the script (Deploy → Manage deployments → Edit → Deploy)

### Getting Permission Errors
- Make sure you clicked "Allow" when authorizing
- Try going through the authorization flow again
- Check that the Google account matches the sheet owner

### Form Submits But No Data
- Open the Apps Script editor
- Click **Executions** on the left sidebar
- Check for any errors in recent executions
- Verify the field names in the script match the form field names

---

## Security Notes

- The Web app URL is public but only accepts POST requests
- Data is stored in your private Google Sheet (only you can access it)
- Consider adding email notifications when new submissions arrive
- You can add data validation in the Google Sheet

---

## Optional: Email Notifications

To receive an email when someone submits the form, add this to your Apps Script:

```javascript
// Add this inside the doPost function, after sheet.appendRow(row);

MailApp.sendEmail({
  to: 'info@hive-connect.org',
  subject: 'New HIVE Membership Application',
  body: 'New application from: ' + data.fullname + '\nEmail: ' + data.email
});
```

---

## Support

If you need help:
1. Check the Google Apps Script documentation
2. Verify all steps were completed correctly
3. Test with a simple form first to ensure the connection works

**Current Status**: Form submissions are currently only shown via popup. Follow these steps to enable Google Sheets logging.
