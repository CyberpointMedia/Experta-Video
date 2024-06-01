import { Test, TestingModule } from '@nestjs/testing';
import { VideoChatGateway } from './video-chat.gateway';
import { VideoChatService } from './video-chat.service';

describe('VideoChatGateway', () => {
  let gateway: VideoChatGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VideoChatGateway, VideoChatService],
    }).compile();

    gateway = module.get<VideoChatGateway>(VideoChatGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
