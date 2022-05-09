import { ObjectId } from 'mongoose'
import { injectable } from 'tsyringe'
import { chatRoom } from '../schemas/ChatRoom'

@injectable()
class GetChatRoomByUsersService {
  async execute(idUsers: ObjectId[]) {
    const room = await chatRoom
      .findOne({
        idUsers: {
          $all: idUsers,
        },
      })
      .exec()

    return room
  }
}
export { GetChatRoomByUsersService }
