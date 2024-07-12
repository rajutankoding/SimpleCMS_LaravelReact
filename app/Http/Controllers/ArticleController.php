<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articles = Article::orderBy('created_at', 'desc')->get();
        return Inertia::render('Articles/ArticlesPages',[
            'articles' => $articles
        ]);
        // return view('articles.index', compact('articles'));
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

        $slug = Str::slug($request->input('title'),'-');

        $imageName = time() . '.' . $request->image->extension();
        $request->image->move(public_path('images'), $imageName);
        $article = new Article();
        $article->title = $request->input('title');
        $article->slug = $slug;
        $article->content = $request->input('content');
        $article->image = $imageName;
        $article->category = $request->input('category');
        $article->user_id = $request->input('user_id');
        $article->save();
        return redirect()->route('articles')->with('success', 'Article created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Article $article)
    {
        $articles = Article::orderBy('created_at', 'desc')->get();
        foreach ($articles as $article) {
            $article->image_url = url('public/' . $article->image);
        }
        return response()->json($articles);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Article $article)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Article $article)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Article $article)
    {
        //
    }
}
