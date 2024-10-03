import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { BlockListService } from './block-list.service';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import {
  AddBlockItemDto,
  BlockItemDto,
  BlockListDto,
  BlockListQueryDto,
} from './dto';
import { AuthGuard } from '../auth/auth.guard';
import { SessionInfo } from '../auth/session-info.decorator';
import { GetSessionInfoDto } from '../auth/dto';

@ApiTags('Block list')
@Controller('block-list')
@UseGuards(AuthGuard)
export class BlockListController {
  constructor(private blockListService: BlockListService) {}

  @Get()
  @ApiOperation({ summary: 'Получить все записи блокировок' })
  @ApiOkResponse({
    type: BlockListDto,
  })
  getList(
    @Query() query: BlockListQueryDto,
    @SessionInfo() session: GetSessionInfoDto,
  ): Promise<BlockListDto> {
    return this.blockListService.getByUser(session.id, query);
  }

  @Post('item')
  @ApiOperation({ summary: 'Добавить блокировку' })
  @ApiCreatedResponse({
    type: BlockItemDto,
  })
  addBlockItem(
    @Body() body: AddBlockItemDto,
    @SessionInfo() session: GetSessionInfoDto,
  ): Promise<BlockItemDto> {
    return this.blockListService.addItem(session.id, body);
  }

  @Delete('item/:id')
  @ApiOperation({ summary: 'Удалить блокировку' })
  @ApiOkResponse({
    type: BlockItemDto,
  })
  async removeBlockItem(
    @Param('id', ParseIntPipe) id: number,
    @SessionInfo() session: GetSessionInfoDto,
  ): Promise<BlockItemDto> {
    return await this.blockListService.removeItem(session.id, id);
  }
}
