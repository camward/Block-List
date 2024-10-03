import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AccountDto, PatchAccountDto } from './dto';
import { AccountService } from './account.service';
import { AuthGuard } from '../auth/auth.guard';
import { SessionInfo } from '../auth/session-info.decorator';
import { GetSessionInfoDto } from '../auth/dto';

@ApiTags('Account')
@Controller('account')
@UseGuards(AuthGuard)
export class AccountController {
  constructor(private accountService: AccountService) {}

  @Get()
  @ApiOperation({ summary: 'Получить данные' })
  @ApiOkResponse({
    type: AccountDto,
  })
  getAccount(@SessionInfo() session: GetSessionInfoDto): Promise<AccountDto> {
    return this.accountService.getAccount(session.id);
  }

  @Patch()
  @ApiOperation({ summary: 'Обновить данные' })
  @ApiOkResponse({
    type: AccountDto,
  })
  patchAccount(
    @Body() body: PatchAccountDto,
    @SessionInfo() session: GetSessionInfoDto,
  ): Promise<AccountDto> {
    return this.accountService.patchAccount(session.id, body);
  }
}
