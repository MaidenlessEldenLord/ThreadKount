export async function GET() {
    const result = await fetch(
      'http://worldtimeapi.org/api/timezone/America/New_York',
      {
        cache: 'no-store',
      },
    );
    const data = await result.json();
   
    return Response.json({ datetime: data.datetime });
<<<<<<< HEAD
  }
=======
  }
>>>>>>> b766a8736ee9fa9ace61951b3ab0ae6228a7b8b9
