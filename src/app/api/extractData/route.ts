import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Paths to the original and new JSON files
    const originalFilePath = path.join(process.cwd(), 'src', 'lib', 'data500.json'); // Updated path
    const newFilePath = path.join(process.cwd(), 'src', 'lib', 'data100us.json'); // Destination path


    // Read the original file
    const data = fs.readFileSync(originalFilePath, 'utf-8');
    const jsonData = JSON.parse(data);

    // Extract the first 20 items
  /*   
 0, 100
 100, 200
 200, 300
 300, 400
  400, 500
  */
    const first100Items = jsonData.slice(400, 500);

    // Write the extracted data to a new file
    fs.writeFileSync(newFilePath, JSON.stringify(first100Items, null, 2), 'utf-8');

    return NextResponse.json({ message: 'File created successfully', data: first100Items });
  } catch (error) {
    console.error('Error processing data:', error);
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}
