import { AuthenticatedGuard } from './../utils/Guards';
import { Controller, Inject, Post, UseGuards } from '@nestjs/common';
import { Routes, Services } from 'src/utils/constants';

@Controller(Routes.CONVERSATIONS)
@UseGuards(AuthenticatedGuard)
export class ConversationsController {
  constructor(
    @Inject(Services.CONVERSATIONS)
    private readonly conversationsService: IConversationsService,
  ) {}
  @Post()
  createConversation() {}
}
