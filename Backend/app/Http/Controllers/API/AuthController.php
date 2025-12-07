<?php

namespace App\Http\Controllers\API;

use App\DTO\UserDto;
use App\Exceptions\UnableToCreateException;
use App\Exceptions\UserNotFoundException;
use App\Http\Controllers\Controller;
use App\service\AuthService;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    private AuthService $authService;
    public function __construct()
    {
        $this->authService = app(AuthService::class);
    }

    public function register(Request $request):JsonResponse
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed|min:8'
        ]);
        $user = new UserDto();
        $user->password = $request->password;
        $user->name = $request->name;
        $user->email = $request->email;
        try {
            $this->authService->registerUser($user);
            return response()->json([
                'status' => 'success',
                'message' => 'User created successfully'
            ]);
        } catch (UnableToCreateException $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage()], 400);
        }
    }

        public function login(Request $request):JsonResponse{
            $request->validate([
                 'email'=>'required|email',
                 'password'=>'required|min:8'
             ]);
            $user=new UserDto();
            $user->email=$request->email;
            $user->password=$request->password;

            try{
                return response()->json($this->authService->loginUser($user));
            }catch(UserNotFoundException $e){
                return response()->json(['message'=>$e->getMessage()],401);
            }
        }
        public function me():JsonResponse{
        return response()->json(auth()->user());
        }

        public function getAllUsers():JsonResponse{
        try {
            return response()->json($this->authService->getUsers());
        }catch (UserNotFoundException $e){
            return response()->json(['message'=>$e->getMessage()],401);
        }
        }



}
