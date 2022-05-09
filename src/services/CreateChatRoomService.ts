import { injectable } from 'tsyringe'
import { chatRoom } from '../schemas/ChatRoom'

@injectable()
class CreateChatRoomService {
  async execute(idUsers: string[]) {
    const room = await chatRoom.create({
      idUsers,
    })

    return room
  }
}

export { CreateChatRoomService }
