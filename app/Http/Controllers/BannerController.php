<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BannerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $banners = Banner::orderBy('created_at', 'desc')->get();
        return Inertia::render('Banners/BannerPages', [
            'banner' => $banners
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $imageName = time() . '.' . $request->image->extension();
        $request->image->move(public_path('images'), $imageName);
        $banner = new Banner();
        $banner->thumbnail = $request->input('thumbnail');
        $banner->path = $request->input('path');
        $banner->image = $imageName;
        $banner->user_id = $request->input('user_id');
        $banner->save();
        return redirect()->route('banners')->with('success', 'Banner created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $banners = Banner::orderBy('created_at', 'desc')->get()->map(function ($banner) {
            $banner->image_url = url('images/' . $banner->image);
            return $banner;
        });

        return response()->json($banners);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
