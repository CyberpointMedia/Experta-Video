import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { VideoChatService } from './video-chat.service';
import { CreateVideoChatDto } from './dto/create-video-chat.dto';
import { UpdateVideoChatDto } from './dto/update-video-chat.dto';

@WebSocketGateway()
export class VideoChatGateway {
  constructor(private readonly videoChatService: VideoChatService) {}

  @SubscribeMessage('createVideoChat')
  create(@MessageBody() createVideoChatDto: CreateVideoChatDto) {
    return this.videoChatService.create(createVideoChatDto);
  }

  @SubscribeMessage('findAllVideoChat')
  findAll() {
    return this.videoChatService.findAll();
  }

  @SubscribeMessage('findOneVideoChat')
  findOne(@MessageBody() id: number) {
    return this.videoChatService.findOne(id);
  }

  @SubscribeMessage('updateVideoChat')
  update(@MessageBody() updateVideoChatDto: UpdateVideoChatDto) {
    return this.videoChatService.update(updateVideoChatDto.id, updateVideoChatDto);
  }

  @SubscribeMessage('removeVideoChat')
  remove(@MessageBody() id: number) {
    return this.videoChatService.remove(id);
  }
}
