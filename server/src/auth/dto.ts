import { ApiProperty } from "@nestjs/swagger";

export class SignUpBodyDto {
    @ApiProperty({
        example: 'test@mail.ru'
    })
    email: string;

    @ApiProperty({
        example: '123456'
    })
    password: string;
}

export class SignInBodyDto {
    @ApiProperty({
        example: 'test@mail.ru'
    })
    email: string;

    @ApiProperty({
        example: '123456'
    })
    password: string;
}

export class GetSessionInfoDto {
    @ApiProperty({
        example: 123456
    })
    id: number;

    @ApiProperty({
        example: 'test@mail.ru'
    })
    email: string;
}