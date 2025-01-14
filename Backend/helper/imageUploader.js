import fs from 'fs';
import path from 'path';

export const imageUpload = (file, folder = "users") => {
  try {
    // Get file extension
    const fileExt = file.name.split('.').pop();

    // Generate a random name for the file
    const randomName = Math.random().toString(36).substring(2, 30).toUpperCase();
    const fileName = `${randomName}.${fileExt}`;

    // Path to save the file (ensure this is in the correct directory)
    const dirPath = path.join(__dirname, 'public', 'images', folder);

    // Check if the directory exists, if not, create it
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true }); // Create directory if it doesn't exist
    }

    // Define the full path where the file will be stored
    const filePath = path.join(dirPath, fileName);

    // Move the file to the target path
    file.mv(filePath, (err) => {
      if (err) {
        console.log("Error moving the file:", err);
        return false;
      }
      console.log("File uploaded successfully!");
    });

    return fileName; // Return the filename to be stored in the database

  } catch (error) {
    console.error('Error uploading the image:', error);
    return false;
  }
};
