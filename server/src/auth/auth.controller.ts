import {Body, Controller, Get, HttpCode, HttpStatus, Post, Res, UseGuards} from '@nestjs/common';
import {GetSessionInfoDto, SignInBodyDto, SignUpBodyDto} from "./dto";
import {ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags} from "@nestjs/swagger";
import {AuthService} from "./auth.service";
import { CookieService } from "./cookie.service";
import { Response } from 'express';
import { AuthGuard } from "./auth.guard";
import {SessionInfo} from "./session-info.decorator";

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService, private cookieService: CookieService) {}

    @Post('sign-up')
    @ApiOperation({ summary: 'Регистрация', description: 'Создается пользователь, его аккаунт и список блокировок' })
    @ApiCreatedResponse()
    async signUp(@Body() body: SignUpBodyDto, @Res({ passthrough: true }) res: Response) {
        const { accessToken } = await this.authService.signUp(body.email, body.password);
        this.cookieService.setCookie(res, accessToken);
    }

    @Post('sign-in')
    @ApiOperation({ summary: 'Авторизация' })
    @ApiOkResponse()
    @HttpCode(HttpStatus.OK)
    async signIn(@Body() body: SignInBodyDto, @Res({ passthrough: true }) res: Response) {
        const { accessToken } = await this.authService.signIn(body.email, body.password);
        this.cookieService.setCookie(res, accessToken);
    }

    @Post('sign-out')
    @ApiOperation({ summary: 'Выход' })
    @ApiOkResponse()
    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard)
    signOut(@Res({ passthrough: true }) res: Response) {
        this.cookieService.removeCookie(res);
    }

    @Get('session')
    @ApiOperation({ summary: 'Получить сессию пользователя' })
    @ApiOkResponse({
        type: GetSessionInfoDto
    })
    @UseGuards(AuthGuard)
    getSessionInfo(@SessionInfo() session: GetSessionInfoDto) {
        return session;
    }
}
