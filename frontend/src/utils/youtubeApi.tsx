export async function getVideos(): Promise<void | {}> {
    return await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=How%20to%20bottle%20feed%20a%20baby&key=AIzaSyCnVk1T4zob_s69oq9A9pLRS0OE-6pdf9Y`)
      .then(data => data.json())
      .then(list => {
        console.log(list);
        console.log ("hellllllllllo") // Add this line to check if data is being returned
        return list;
      });
  }