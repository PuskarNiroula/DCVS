<?php
namespace App\service;
use App\DTO\UserDto;
use App\Exceptions\UnableToCreateException;
use App\Exceptions\UserNotFoundException;
use App\interface\UserInterface;
use Illuminate\Support\Facades\Hash;
use Mockery\Exception;
use Tymon\JWTAuth\Facades\JWTAuth;


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

    public function loginUser(UserDto $userDto):?array{
        try{
           $user= $this->user->getUserByEmail($userDto->email);
            if(!$user){
                throw new UserNotFoundException('Invalid Credentials');
            }
            if(!Hash::check($userDto->password,$user->password)){
                throw new UserNotFoundException('Invalid Credentials');
            }
            $token=JWTAuth::fromUser($user);
            return [
                'status'=>'success',
                'token'=>$token,
                'user'=>$user
            ];
        }catch (Exception $e){
            throw new UserNotFoundException($e->getMessage());
        }

    }

    public function getUsers(){
        try{
            return $this->user->getAll();
        }catch (Exception $e){
            throw new UserNotFoundException($e->getMessage());
        }
    }
}
