import { authMiddleware } from '@kinde-oss/kinde-auth-nextjs/server';

export const config = {
  matcher: [
    '/gallery', '/albums', '/albums/Camping', '/albums/Music', '/albums/Samples', '/favorites'
  ]
}

export default authMiddleware;