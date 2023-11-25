export async function GET(request: Request) {
  console.log('🚀 ~ GET ~ request:', request)
  return new Response('ciao')
}
