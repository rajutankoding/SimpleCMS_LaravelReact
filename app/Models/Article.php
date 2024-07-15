<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'shortDesc',
        'content',
        'image',
        'user_id',
        'category',
        // 'status',
    ];
}
