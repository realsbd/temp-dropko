import axios from 'axios';


export async function register(formData) {
    // Prepare the request body
    const body = new URLSearchParams();
    for (const [key, value] of formData) {
        body.append(key, value);
    }

    try {
        const imageData = new FormData();
        imageData.append('file', formData.image);
        const pinataOptions = JSON.stringify({
          cidVersion: 0,
        })
        imageData.append('pinataOptions', pinataOptions);
  
        const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", imageData, {
          maxBodyLength: "Infinity",
          headers: {
            'Content-Type': `multipart/form-data; boundary=${imageData._boundary}`,
            'Authorization': `Bearer ${JWT}`
          }
        });
        console.log('Pinata: ', res.data);
        body.image = res.data.IpfsHash;
      } catch (error) {
        console.log(error);
      }

    // Send the request to the API
    const response = await Project.create(body);

    // Check if the response is successful
    if (response.ok) {
        // Get the user data from the response
        const project = await response.json();

        // Return the project data
        return project
    } else {
        // Handle the error case
        console.error('Failed to register:', response.status);
    }
}