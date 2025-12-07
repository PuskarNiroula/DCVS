<?php
namespace App\service;
use App\DTO\UserDto;
use App\Exceptions\UnableToCreateException;
use App\interface\UserInterface;
use Mockery\Exception;


class AuthService
{
    private UserInterface  $user;

    public function __construct(){
        $this->user = app(UserInterface::class);
    }

    /**
     * @throws UnableToCreateException
     */
    public function registerUser(UserDto $user):void{
        try{
            $this->user->createUser($user);
        }catch (Exception $e){
            throw new UnableToCreateException($e->getMessage());
        }

    }
}
