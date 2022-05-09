import { injectable } from 'tsyringe'
import { chatRoom } from '../schemas/ChatRoom'

@injectable()
class GetChatRoomByIdService {
  async execute(idChatRoom: string) {
    const room = await chatRoom
      .findOne({
        idChatRoom,
      })
      .populate('idUsers')
      .exec()

    return room
  }
}

export { GetChatRoomByIdService }
